import { Env } from '@/config/env';
import type { ProductCategoryDto } from '@/features/products/data/dto/CategoriesDto';
import type { ProductListDto } from '@/features/products/data/dto/ProductsDto';
import type { ProductParamsDto } from '@/features/products/data/dto/ProductsParamsDto';
import type { HttpClient } from '@/infra/httpClient/HttpClient';

export interface ProductsApi {
  fetchProducts(params: ProductParamsDto): Promise<ProductListDto>;
  fetchProductsByCategory(
    categorySlug: string,
    params: ProductParamsDto,
  ): Promise<ProductListDto>;
  fetchProductsCategories(): Promise<ProductCategoryDto[]>;
}

export class ProductsApiImpl implements ProductsApi {
  constructor(private httpClient: HttpClient) {}

  async fetchProducts(params: ProductParamsDto): Promise<ProductListDto> {
    const productsList = await this.httpClient.get<ProductListDto>(
      Env.DUMMY_API_URL,
      '/products',
      { params },
    );

    return productsList;
  }

  async fetchProductsByCategory(
    categorySlug: string,
    params: ProductParamsDto,
  ): Promise<ProductListDto> {
    const productsList = await this.httpClient.get<ProductListDto>(
      Env.DUMMY_API_URL,
      `/products/category/${categorySlug}`,
      { params },
    );

    return productsList;
  }

  async fetchProductsCategories(): Promise<ProductCategoryDto[]> {
    const categories = await this.httpClient.get<ProductCategoryDto[]>(
      Env.DUMMY_API_URL,
      '/products/categories',
    );

    return categories;
  }
}
