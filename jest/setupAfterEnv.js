/* eslint-disable no-undef */

jest.mock('@/specs/NativeCalendarModule', () => ({
  addReminderEvent: jest.fn(),
}));
