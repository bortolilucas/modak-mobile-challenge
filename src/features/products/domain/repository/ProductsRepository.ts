import type { Product } from '@/features/products/domain/models/Product';

export interface ProductsRepository {
  getProductList(): Promise<Product[]>;
}
