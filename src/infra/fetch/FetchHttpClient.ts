import { HttpGenericError, HttpResponseError } from '@/infra/fetch/errors';
import type { HttpClient, HttpClientConfig } from '@/infra/HttpClient';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const requestCreator =
  (method: Method) =>
  async <T>(
    hostname: string,
    endpoint: string,
    { body, headers, params }: HttpClientConfig = {},
  ) => {
    try {
      const querystring = params ? `?${new URLSearchParams(params)}` : '';
      const url = `${hostname}${endpoint}${querystring}`;

      const requestBody = body && JSON.stringify(body);

      const response = await fetch(url, {
        method,
        headers,
        body: requestBody,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new HttpResponseError(data, response.status);
      }

      return data as T;
    } catch (error) {
      throw new HttpGenericError(error);
    }
  };

export const FetchHttpClient = (): HttpClient => ({
  get: requestCreator('GET'),
  post: requestCreator('POST'),
  put: requestCreator('PUT'),
  delete: requestCreator('DELETE'),
});
