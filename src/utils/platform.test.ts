import { isAndroid } from '@/utils/platform';
import { Platform } from 'react-native';

describe('Platform utils', () => {
  test('should return true if android', () => {
    Platform.OS = 'android';

    expect(isAndroid()).toBe(true);
  });

  test('should return false if not android', () => {
    Platform.OS = 'ios';

    expect(isAndroid()).toBe(false);
  });
});
