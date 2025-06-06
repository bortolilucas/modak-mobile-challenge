import { Env } from '@/config/env';
import type { ProductCategoryDto } from '@/features/products/data/dto/CategoriesDto';
import type {
  ProductDto,
  ProductListDto,
} from '@/features/products/data/dto/ProductsDto';
import type { ProductParamsDto } from '@/features/products/data/dto/ProductsParamsDto';
import type { HttpClient } from '@/infra/httpClient/HttpClient';

export interface ProductsApi {
  fetchProducts(
    params: ProductParamsDto,
    signal: AbortSignal,
  ): Promise<ProductListDto>;
  fetchProductsByCategory(
    categorySlug: string,
    params: ProductParamsDto,
    signal: AbortSignal,
  ): Promise<ProductListDto>;
  fetchProductDetail(
    productId: number,
    signal: AbortSignal,
  ): Promise<ProductDto>;
  fetchProductsCategories(signal: AbortSignal): Promise<ProductCategoryDto[]>;
}

export class ProductsApiImpl implements ProductsApi {
  constructor(private httpClient: HttpClient) {}

  async fetchProducts(
    params: ProductParamsDto,
    signal: AbortSignal,
  ): Promise<ProductListDto> {
    const productsList = await this.httpClient.get<ProductListDto>(
      Env.DUMMY_API_URL,
      '/products',
      { params, signal },
    );

    return productsList;
  }

  async fetchProductsByCategory(
    categorySlug: string,
    params: ProductParamsDto,
    signal: AbortSignal,
  ): Promise<ProductListDto> {
    const productsList = await this.httpClient.get<ProductListDto>(
      Env.DUMMY_API_URL,
      `/products/category/${categorySlug}`,
      { params, signal },
    );

    return productsList;
  }

  async fetchProductDetail(
    productId: number,
    signal: AbortSignal,
  ): Promise<ProductDto> {
    const product = await this.httpClient.get<ProductDto>(
      Env.DUMMY_API_URL,
      `/products/${productId}`,
      { signal },
    );

    return product;
  }

  async fetchProductsCategories(
    signal: AbortSignal,
  ): Promise<ProductCategoryDto[]> {
    const categories = await this.httpClient.get<ProductCategoryDto[]>(
      Env.DUMMY_API_URL,
      '/products/categories',
      { signal },
    );

    return categories;
  }
}
