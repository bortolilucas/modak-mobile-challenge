import type { ProductsApi } from '@/features/products/data/api/ProductsApi';
import { dtoToProductCategory } from '@/features/products/data/mappers/CategoriesMappers';
import {
  dtoToProduct,
  productFiltersToDto,
} from '@/features/products/data/mappers/ProductsMappers';
import type { ProductCategory } from '@/features/products/domain/models/Category';
import type {
  Product,
  ProductFilters,
} from '@/features/products/domain/models/Product';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';

export class ProductsRepositoryImpl implements ProductsRepository {
  constructor(private api: ProductsApi) {}

  async getProductList(
    filters: ProductFilters,
    signal: AbortSignal,
  ): Promise<Product[]> {
    const params = productFiltersToDto(filters);
    const response = await (filters.category
      ? this.api.fetchProductsByCategory(filters.category, params, signal)
      : this.api.fetchProducts(params, signal));

    return response.products.map(dtoToProduct);
  }

  async getProductDetail(
    productId: number,
    signal: AbortSignal,
  ): Promise<Product> {
    const response = await this.api.fetchProductDetail(productId, signal);

    return dtoToProduct(response);
  }

  async getProductCategoryList(
    signal: AbortSignal,
  ): Promise<ProductCategory[]> {
    const response = await this.api.fetchProductsCategories(signal);

    return response.map(dtoToProductCategory);
  }
}
