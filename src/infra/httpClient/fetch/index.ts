import {
  HttpGenericError,
  HttpResponseError,
} from '@/infra/httpClient/fetch/errors';
import type {
  HttpClient,
  HttpClientConfig,
  HttpMethod,
} from '@/infra/httpClient/HttpClient';
import { toQueryString } from '@/utils/querystring';

export class FetchHttpClient implements HttpClient {
  get = this.createRequest('GET');
  post = this.createRequest('POST');
  put = this.createRequest('PUT');
  delete = this.createRequest('DELETE');

  createRequest(method: HttpMethod) {
    return async <T>(
      hostname: string,
      endpoint: string,
      { body, headers, params }: HttpClientConfig = {},
    ) => {
      try {
        const url = `${hostname}${endpoint}${toQueryString(params)}`;

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
  }
}
