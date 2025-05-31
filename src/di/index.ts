import { graph, ObjectGraph, provides, singleton } from 'react-obsidian';

import { FetchHttpClient } from '@/infra/httpClient/fetch';
import type { HttpClient } from '@/infra/httpClient/HttpClient';

@singleton()
@graph()
export class AppDiGraph extends ObjectGraph {
  @provides()
  httpClient(): HttpClient {
    return new FetchHttpClient();
  }
}
