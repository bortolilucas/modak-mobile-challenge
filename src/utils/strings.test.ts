import { plural } from '@/utils/strings';

describe('Strings utils', () => {
  describe('plural util', () => {
    test('should pluralize word (count one)', () => {
      const word = 'word';

      const result = plural(1, word);

      expect(result).toBe('word');
    });

    test('should pluralize word (more than one)', () => {
      const word = 'word';

      const result = plural(3, word);

      expect(result).toBe('words');
    });

    test('should pluralize word with custom plural', () => {
      const word = 'query';

      const result = plural(3, word, 'queries');

      expect(result).toBe('queries');
    });
  });
});
