import type { ProductCategory } from '@/features/products/domain/models/Category';
import type {
  Product,
  ProductFilters,
} from '@/features/products/domain/models/Product';

export interface ProductsRepository {
  getProductList(
    filters: ProductFilters,
    signal: AbortSignal,
  ): Promise<Product[]>;
  getProductDetail(productId: number, signal: AbortSignal): Promise<Product>;
  getProductCategoryList(signal: AbortSignal): Promise<ProductCategory[]>;
}
