/* eslint-disable no-undef */

jest.mock('@/specs/NativeCalendarModule', () => ({
  addReminderEvent: jest.fn(),
}));

jest.mock('@/components/BottomSheet', () => ({
  useBottomSheet: () => ({
    show: jest.fn(),
    showMessage: jest.fn(),
    hide: jest.fn(),
  }),
}));

jest.mock('@/config/deeplink');

jest.mock('@/utils/platform');
