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
  let abortController: AbortController;

  beforeEach(() => {
    jest.clearAllMocks();

    mockHttpClient = mock<HttpClient>();
    api = new ProductsApiImpl(mockHttpClient);
    abortController = new AbortController();
  });

  describe('when fetchProducts is called', () => {
    test('should return ProductListDto', async () => {
      mockHttpClient.get.mockResolvedValue(mockProductListDto);

      const actualResponse = await api.fetchProducts(
        mockProductParamsDto,
        abortController.signal,
      );

      expect(actualResponse).toEqual(mockProductListDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        '/products',
        { params: mockProductParamsDto, signal: abortController.signal },
      );
    });
  });

  describe('when fetchProductsByCategory is called', () => {
    test('should return ProductListDto by category', async () => {
      mockHttpClient.get.mockResolvedValue(mockProductListDto);

      const actualResponse = await api.fetchProductsByCategory(
        mockCategoryDto.slug,
        mockProductParamsDto,
        abortController.signal,
      );

      expect(actualResponse).toEqual(mockProductListDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        `/products/category/${mockCategoryDto.slug}`,
        { params: mockProductParamsDto, signal: abortController.signal },
      );
    });
  });

  describe('when fetchProductDetail is called', () => {
    test('should return ProductDto', async () => {
      mockHttpClient.get.mockResolvedValue(mockProductDto);

      const actualResponse = await api.fetchProductDetail(
        mockProductDto.id,
        abortController.signal,
      );

      expect(actualResponse).toEqual(mockProductDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        `/products/${mockProductDto.id}`,
        { signal: abortController.signal },
      );
    });
  });

  describe('when fetchProductsCategories is called', () => {
    test('should return ProductCategoryDto', async () => {
      mockHttpClient.get.mockResolvedValue(mockCategoriesDto);

      const actualResponse = await api.fetchProductsCategories(
        abortController.signal,
      );

      expect(actualResponse).toEqual(mockCategoriesDto);
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        Env.DUMMY_API_URL,
        '/products/categories',
        { signal: abortController.signal },
      );
    });
  });
});
