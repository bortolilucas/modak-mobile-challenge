import { graph, lifecycleBound, ObjectGraph, provides } from 'react-obsidian';

import { AppDiGraph } from '@/di';
import { ProductsApiImpl } from '@/features/products/data/api/ProductsApi';
import { ProductsRepositoryImpl } from '@/features/products/data/repository/ProductsRepositoryImpl';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';
import type { HttpClient } from '@/infra/httpClient/HttpClient';

@lifecycleBound({ scope: 'feature' })
@graph({ subgraphs: [AppDiGraph] })
export class ProductsDiGraph extends ObjectGraph {
  @provides()
  repository(httpClient: HttpClient): ProductsRepository {
    const api = new ProductsApiImpl(httpClient);

    return new ProductsRepositoryImpl(api);
  }
}
