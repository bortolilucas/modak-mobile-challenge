import { toQueryString } from '@/utils/querystring';

describe('Querystring utils', () => {
  test('should convert obj to query string', () => {
    const obj = {
      empty: '',
      param1: 'param1Value',
      param2: 'param2Value',
    };

    const querystring = toQueryString(obj);

    expect(querystring).toBe(`?param1=param1Value&param2=param2Value`);
  });

  test('should return empty if no obj', () => {
    const querystring = toQueryString(undefined);

    expect(querystring).toBe('');
  });
});
