import { FetchHttpClient } from '@/infra/httpClient/fetch';
import {
  HttpGenericError,
  HttpResponseError,
} from '@/infra/httpClient/fetch/errors';
import type { HttpMethod } from '@/infra/httpClient/HttpClient';

global.fetch = jest.fn();
const mockedFetch = global.fetch as jest.Mock;

describe('FetchHttpClient', () => {
  const client = new FetchHttpClient();
  const hostname = 'https://api.example.com';
  const endpoint = '/test';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.each(['GET', 'POST', 'DELETE', 'PUT'] as HttpMethod[])(
    'should call method %s with correct params, headers, body and return response',
    async () => {
      const responseData = { success: true };
      const params = { param: 'paramValue' };
      const body = { name: 'value' };
      const headers = { Authorization: 'Bearer Token' };

      mockedFetch.mockResolvedValue({
        ok: true,
        json: async () => responseData,
      });

      const result = await client.get<typeof responseData>(hostname, endpoint, {
        params,
        body,
        headers,
      });

      expect(result).toEqual(responseData);
      expect(fetch).toHaveBeenCalledWith(
        `${hostname}${endpoint}?param=paramValue`,
        expect.objectContaining({
          method: 'GET',
          body: JSON.stringify(body),
          headers,
        }),
      );
    },
  );

  test('should throw HttpResponseError on API error', async () => {
    const errorData = { error: 'Something went wrong' };

    mockedFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => errorData,
    });

    await expect(client.get(hostname, endpoint)).rejects.toThrow(
      HttpResponseError,
    );
  });

  test('should throw HttpGenericError on fetch failure', async () => {
    mockedFetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(client.get(hostname, endpoint)).rejects.toThrow(
      HttpGenericError,
    );
  });
});
