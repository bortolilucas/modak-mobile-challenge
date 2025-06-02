package com.productsapp.nativeModules.calendar

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeCalendarPackage : BaseReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
        if (name == NativeCalendarModule.NAME) {
            NativeCalendarModule(reactContext)
        } else null

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeCalendarModule.NAME to ReactModuleInfo(
                name = NativeCalendarModule.NAME,
                className = NativeCalendarModule.NAME,
                canOverrideExistingModule = false,
                needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}