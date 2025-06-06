import {
  HttpGenericError,
  HttpResponseError,
} from '@/infra/httpClient/fetch/errors';
import type {
  HttpClient,
  HttpClientConfig,
  HttpMethod,
  HttpMethodFunction,
} from '@/infra/httpClient/HttpClient';
import { toQueryString } from '@/utils/querystring';

export class FetchHttpClient implements HttpClient {
  get = this.createRequest('GET');
  post = this.createRequest('POST');
  put = this.createRequest('PUT');
  delete = this.createRequest('DELETE');

  createRequest(method: HttpMethod): HttpMethodFunction {
    return async <T>(
      hostname: string,
      endpoint: string,
      { body, headers, params, signal }: HttpClientConfig = {},
    ) => {
      const url = `${hostname}${endpoint}${toQueryString(params)}`;

      const requestBody = body && JSON.stringify(body);

      let response: Response;
      let data: T;

      try {
        response = await fetch(url, {
          method,
          headers,
          signal,
          body: requestBody,
        });

        data = await response.json();
      } catch (error) {
        throw new HttpGenericError(error);
      }

      if (!response.ok) {
        throw new HttpResponseError(data, response.status);
      }

      return data as T;
    };
  }
}
