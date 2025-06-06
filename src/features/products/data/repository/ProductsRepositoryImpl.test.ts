import { mock, type MockProxy } from 'jest-mock-extended';

import type { ProductsApi } from '@/features/products/data/api/ProductsApi';
import {
  mockCategories,
  mockCategoriesDto,
} from '@/features/products/data/mocks/categories';
import {
  mockFilters,
  mockFiltersWithCategory,
  mockProduct,
  mockProductDto,
  mockProductList,
  mockProductListDto,
  mockProductParamsDto,
} from '@/features/products/data/mocks/product';
import { ProductsRepositoryImpl } from '@/features/products/data/repository/ProductsRepositoryImpl';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';

describe('ProductsRepositoryImpl', () => {
  let mockApi: MockProxy<ProductsApi>;
  let repository: ProductsRepository;
  let abortController: AbortController;

  beforeEach(() => {
    jest.clearAllMocks();
    mockApi = mock<ProductsApi>();
    repository = new ProductsRepositoryImpl(mockApi);
    abortController = new AbortController();
  });

  describe('when getProductList is called', () => {
    describe('without category', () => {
      test('should call fetchProducts api and return list of products', async () => {
        mockApi.fetchProducts.mockResolvedValue(mockProductListDto);

        const result = await repository.getProductList(
          mockFilters,
          abortController.signal,
        );

        expect(result).toEqual(mockProductList);
        expect(mockApi.fetchProducts).toHaveBeenCalledWith(
          mockProductParamsDto,
          abortController.signal,
        );
      });
    });

    describe('with category', () => {
      test('should call fetchProductsByCategory api and return list of products', async () => {
        mockApi.fetchProductsByCategory.mockResolvedValue(mockProductListDto);

        const result = await repository.getProductList(
          mockFiltersWithCategory,
          abortController.signal,
        );

        expect(result).toEqual(mockProductList);
        expect(mockApi.fetchProductsByCategory).toHaveBeenCalledWith(
          mockFiltersWithCategory.category,
          mockProductParamsDto,
          abortController.signal,
        );
      });
    });
  });

  describe('when getProductDetail is called', () => {
    test('should return product', async () => {
      mockApi.fetchProductDetail.mockResolvedValue(mockProductDto);

      const result = await repository.getProductDetail(
        mockProductDto.id,
        abortController.signal,
      );

      expect(result).toEqual(mockProduct);
      expect(mockApi.fetchProductDetail).toHaveBeenCalledWith(
        mockProductDto.id,
        abortController.signal,
      );
    });
  });

  describe('when getProductCategoryList is called', () => {
    test('should return categories', async () => {
      mockApi.fetchProductsCategories.mockResolvedValue(mockCategoriesDto);

      const result = await repository.getProductCategoryList(
        abortController.signal,
      );

      expect(result).toEqual(mockCategories);
      expect(mockApi.fetchProductsCategories).toHaveBeenCalledWith(
        abortController.signal,
      );
    });
  });
});
