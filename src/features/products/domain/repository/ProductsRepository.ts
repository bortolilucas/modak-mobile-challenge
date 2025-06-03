import type { ProductCategory } from '@/features/products/domain/models/Category';
import type {
  Product,
  ProductFilters,
} from '@/features/products/domain/models/Product';

export interface ProductsRepository {
  getProductList(filters: ProductFilters): Promise<Product[]>;
  getProductDetail(productId: number): Promise<Product>;
  getProductCategoryList(): Promise<ProductCategory[]>;
}
