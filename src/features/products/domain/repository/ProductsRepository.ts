import type { ProductCategory } from '@/features/products/domain/models/Category';
import type {
  Product,
  ProductFilters,
  ProductList,
} from '@/features/products/domain/models/Product';

export interface ProductsRepository {
  getProductList(
    page: number,
    filters: ProductFilters,
    signal: AbortSignal,
  ): Promise<ProductList>;
  getProductDetail(productId: number, signal: AbortSignal): Promise<Product>;
  getProductCategoryList(signal: AbortSignal): Promise<ProductCategory[]>;
}
