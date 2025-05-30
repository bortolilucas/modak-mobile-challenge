import { Env } from '@/config/env';
import type { ProductListResponse } from '@/features/products/data/models/ProductsListResponse';
import type { HttpClient } from '@/infra/HttpClient';

export class ProductsApi {
  constructor(private httpClient: HttpClient) {}

  async fetchProducts() {
    const productsList = await this.httpClient.get<ProductListResponse>(
      Env.DUMMY_API_URL,
      '/products',
    );

    return productsList;
  }
}
