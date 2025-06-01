import type { QueryStringParams } from '@/utils/querystring';

export type HttpClientConfig = {
  body?: BodyInit_;
  headers?: HeadersInit_;
  params?: QueryStringParams;
};

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type HttpMethodFunction = <T>(
  hostname: string,
  url: string,
  config?: HttpClientConfig,
) => Promise<T>;

export type HttpClient = Record<Lowercase<HttpMethod>, HttpMethodFunction>;
