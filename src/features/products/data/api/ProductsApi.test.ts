import { mock, type MockProxy } from 'jest-mock-extended';

import { Env } from '@/config/env';
import {
  ProductsApiImpl,
  type ProductsApi,
} from '@/features/products/data/api/ProductsApi';
import {
  mockCategoriesDto,
  mockCategoryDto,
} from '@/features/products/data/mocks/categories';
import {
  mockProductDto,
  mockProductListDto,
  mockProductParamsDto,
} from '@/features/products/data/mocks/product';
import type { HttpClient } from '@/infra/httpClient/HttpClient';

describe('ProductsApi test', () => {
  let mockHttpClient: MockProxy<HttpClient>;
  let api: ProductsApi;

  beforeEach(() => {
    jest.clearAllMocks();

    mockHttpClient = mock<HttpClient>();
    api = new ProductsApiImpl(mockHttpClient);
  });

  describe('when fetchProducts is called', () => {
    test('should return ProductListDto', async () => {
      mockHttpClient.get.mockResolvedValue(mockProductListDto);

      const actualResponse = await api.fetchProducts(mockProductParamsDto);

      expect(actualResponse).toEqual(mockProductListDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        '/products',
        { params: mockProductParamsDto },
      );
    });
  });

  describe('when fetchProductsByCategory is called', () => {
    test('should return ProductListDto by category', async () => {
      mockHttpClient.get.mockResolvedValue(mockProductListDto);

      const actualResponse = await api.fetchProductsByCategory(
        mockCategoryDto.slug,
        mockProductParamsDto,
      );

      expect(actualResponse).toEqual(mockProductListDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        `/products/category/${mockCategoryDto.slug}`,
        { params: mockProductParamsDto },
      );
    });
  });

  describe('when fetchProductDetail is called', () => {
    test('should return ProductDto', async () => {
      mockHttpClient.get.mockResolvedValue(mockProductDto);

      const actualResponse = await api.fetchProductDetail(mockProductDto.id);

      expect(actualResponse).toEqual(mockProductDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        `/products/${mockProductDto.id}`,
      );
    });
  });

  describe('when fetchProductsCategories is called', () => {
    test('should return ProductCategoryDto', async () => {
      mockHttpClient.get.mockResolvedValue(mockCategoriesDto);

      const actualResponse = await api.fetchProductsCategories();

      expect(actualResponse).toEqual(mockCategoriesDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        '/products/categories',
      );
    });
  });
});
