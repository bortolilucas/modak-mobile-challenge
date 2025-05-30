import type { ProductsApi } from '@/features/products/data/api/ProductsApi';
import { mapProductToDomain } from '@/features/products/data/mappers/ProductsMappers';
import type { Product } from '@/features/products/domain/models/Product';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';

export class ProductsRepositoryImpl implements ProductsRepository {
  constructor(private api: ProductsApi) {}

  async getProductList(): Promise<Product[]> {
    const productsResponse = await this.api.fetchProducts();
    return productsResponse.products.map(mapProductToDomain);
  }
}
