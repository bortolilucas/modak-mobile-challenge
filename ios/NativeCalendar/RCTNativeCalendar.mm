//
//  RCTNativeCalendar.m
//  productsApp
//
//  Created by Lucas Alves on 02/06/25.
//

#import "RCTNativeCalendar.h"
#import "productsApp-Swift.h"

@implementation RCTNativeCalendar {
  NativeCalendarModule *calendar;
}

+ (NSString *)moduleName { 
  return @"NativeCalendarModule";
}

- (id) init {
  if (self = [super init]) {
    calendar = [NativeCalendarModule new];
  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params { 
  return std::make_shared<facebook::react::NativeCalendarModuleSpecJSI>(params);
}

- (void)addReminderEvent:(JS::NativeCalendarModule::ReminderEventData &)data resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSDictionary *eventData = @{
    @"title": data.title(),
    @"description": data.description(),
    @"date": @(data.date())
  };

  return [calendar addReminderEvent:eventData resolve:resolve reject:reject];
}

@end
