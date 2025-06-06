import { formatCurrency } from '@/utils/currency';

describe('Currency utils', () => {
  test('should format currency', () => {
    const amount = 10000;

    const formatted = formatCurrency(amount);

    expect(formatted).toBe('$10,000.00');
  });
});
