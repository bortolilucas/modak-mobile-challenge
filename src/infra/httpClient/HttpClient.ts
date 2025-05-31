export interface HttpClientConfig {
  body?: BodyInit_;
  headers?: HeadersInit_;
  params?: Record<string, string>;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type HttpMethodFunction = <T>(
  hostname: string,
  url: string,
  config?: HttpClientConfig,
) => Promise<T>;

export type HttpClient = Record<Lowercase<HttpMethod>, HttpMethodFunction>;
