//
//  NativeCalendarModule.swift
//  productsApp
//
//  Created by Lucas Alves on 07/06/25.
//

import EventKit
import EventKitUI
import Foundation

@objc
public class NativeCalendarModule: NSObject {
  private let eventStore = EKEventStore()
  private var currentResolve: RCTPromiseResolveBlock?
  private var currentReject: RCTPromiseRejectBlock?

  @objc
  public func addReminderEvent(_ data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    currentResolve = resolve
    currentReject = reject

    guard let title = data["title"] as? String,
          let description = data["description"] as? String,
          let timestamp = data["date"] as? Double
    else {
      reject("MISSING_DATA", "Make sure title, description and date have been passed", nil)
      return
    }

    eventStore.requestFullAccessToEvents { [weak self] granted, error in
      guard let self = self else { return }

      guard granted, error == nil else {
        reject("PERMISSION_DENIED", "Calendar access denied", error)
        return
      }

      self.presentEventEditor(title: title, description: description, timestamp: timestamp)
    }
  }

  private func presentEventEditor(title: String, description: String, timestamp: Double) {
    DispatchQueue.main.async {
      guard let rootVC = RCTPresentedViewController() else {
        self.currentReject?("NO_VIEW_CONTROLLER", "No root view controller found", nil)
        return
      }

      let event = self.createEvent(title: title, description: description, timestamp: timestamp)

      let editVC = EKEventEditViewController()
      editVC.event = event
      editVC.eventStore = self.eventStore
      editVC.editViewDelegate = self

      rootVC.present(editVC, animated: true)
    }
  }

  private func createEvent(title: String, description: String, timestamp: Double) -> EKEvent {
    let event = EKEvent(eventStore: eventStore)
    let startDate = Date(timeIntervalSince1970: timestamp / 1000.0)
    event.title = title
    event.notes = description
    event.startDate = startDate
    event.endDate = Calendar.current.date(byAdding: .day, value: 1, to: startDate)
    event.isAllDay = true
    return event
  }

  private func clearPromises() {
    currentResolve = nil
    currentReject = nil
  }
}

extension NativeCalendarModule: EKEventEditViewDelegate {
  public func eventEditViewController(_ controller: EKEventEditViewController, didCompleteWith action: EKEventEditViewAction) {
    controller.dismiss(animated: true) { [weak self] in
      guard let self = self else { return }

      switch action {
      case .saved:
        self.currentResolve?(["status": "saved"])
      case .canceled:
        self.currentResolve?(["status": "canceled"])
      case .deleted:
        self.currentResolve?(["status": "deleted"])
      @unknown default:
        self.currentReject?("UNKNOWN_ERROR", "Unknown error occured", nil)
      }

      self.clearPromises()
    }
  }
}
