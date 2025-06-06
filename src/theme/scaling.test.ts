import { scale, verticalScale } from '@/theme/scaling';

describe('Scaling', () => {
  beforeEach(() => {});

  describe('when scale is called', () => {
    test('returns the same size when screen width matches guideline', () => {
      const width = 360;
      const value = scale(100, width);
      expect(value).toBe(100);
    });

    test('scales up when screen is wider than guideline', () => {
      const width = 720;
      const value = scale(100, width);
      expect(value).toBe(200);
    });
  });

  describe('when verticalScale is called', () => {
    it('returns the same size when screen height matches guideline', () => {
      const height = 640;
      const value = verticalScale(100, height);
      expect(value).toBe(100);
    });

    it('scales up when screen is taller than guideline', () => {
      const height = 1280;
      const value = verticalScale(100, height);
      expect(value).toBe(200);
    });
  });
});
