package com.productsapp.nativeModules.calendar

import android.content.Intent
import android.provider.CalendarContract
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.productsapp.NativeCalendarModuleSpec

class NativeCalendarModule(
    reactContext: ReactApplicationContext
) : NativeCalendarModuleSpec(reactContext) {
    override fun getName(): String = NAME

    override fun addReminderEvent(data: ReadableMap, promise: Promise) = runCatching {
        val title = data.getString("title")
        val description = data.getString("description")
        val date = data.getDouble("date").toLong()

        val intent = Intent(Intent.ACTION_INSERT).apply {
            setData(CalendarContract.Events.CONTENT_URI)
            putExtra(CalendarContract.Events.TITLE, title)
            putExtra(CalendarContract.Events.DESCRIPTION, description)
            putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, date)
            putExtra(CalendarContract.EXTRA_EVENT_ALL_DAY, true)
        }

        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)

        reactApplicationContext.startActivity(intent)
    }.getOrElse { error ->
        promise.reject(OPEN_CALENDAR_ERROR, "Failed to launch calendar app", error)
    }

    companion object {
        const val NAME = "NativeCalendarModule"
        const val OPEN_CALENDAR_ERROR = "OPEN_CALENDAR_ERROR"
    }
}