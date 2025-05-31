import { Env } from '@/config/env';
import type { ProductListDto } from '@/features/products/data/dto/ProductsListDto';
import type { HttpClient } from '@/infra/httpClient/HttpClient';

export interface ProductsApi {
  fetchProducts(): Promise<ProductListDto>;
}

export class ProductsApiImpl implements ProductsApi {
  constructor(private httpClient: HttpClient) {}

  async fetchProducts() {
    const productsList = await this.httpClient.get<ProductListDto>(
      Env.DUMMY_API_URL,
      '/products',
    );

    return productsList;
  }
}
