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

  async getProductList(filters: ProductFilters): Promise<Product[]> {
    const params = productFiltersToDto(filters);
    const response = await (filters.category
      ? this.api.fetchProductsByCategory(filters.category, params)
      : this.api.fetchProducts(params));

    return response.products.map(dtoToProduct);
  }

  async getProductDetail(productId: number): Promise<Product> {
    const response = await this.api.fetchProductDetail(productId);

    return dtoToProduct(response);
  }

  async getProductCategoryList(): Promise<ProductCategory[]> {
    const response = await this.api.fetchProductsCategories();

    return response.map(dtoToProductCategory);
  }
}
