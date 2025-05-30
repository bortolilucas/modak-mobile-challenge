export interface HttpClientConfig {
  body?: BodyInit_;
  headers?: HeadersInit_;
  params?: Record<string, string>;
}

export interface HttpClient {
  get<T>(hostname: string, url: string, config?: HttpClientConfig): Promise<T>;
  post<T>(hostname: string, url: string, config?: HttpClientConfig): Promise<T>;
  put<T>(hostname: string, url: string, config?: HttpClientConfig): Promise<T>;
  delete<T>(
    hostname: string,
    url: string,
    config: HttpClientConfig,
  ): Promise<T>;
}
