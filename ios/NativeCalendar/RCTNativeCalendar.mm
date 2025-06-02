//
//  RCTNativeCalendar.m
//  productsApp
//
//  Created by Lucas Alves on 02/06/25.
//

#import "RCTNativeCalendar.h"

@implementation RCTNativeCalendar

+ (NSString *)moduleName { 
  return @"NativeCalendarModule";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params { 
  return std::make_shared<facebook::react::NativeCalendarModuleSpecJSI>(params);
}

- (void)addReminderEvent:(JS::NativeCalendarModule::ReminderEventData &)data resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject { 
  reject(@"NOT_IMPLEMENTED", @"Method not implemend for iOS", nil);
}

@end
