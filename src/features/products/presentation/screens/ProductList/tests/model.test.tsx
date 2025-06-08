import { act, renderHook, waitFor } from '@testing-library/react-native';
import { mock, type MockProxy } from 'jest-mock-extended';

import { navigateWithDeepLink } from '@/config/deeplink';
import { mockCategories } from '@/features/products/data/mocks/categories';
import {
  mockEmptyFilters,
  mockProductList,
} from '@/features/products/data/mocks/product';
import {
  ProductSortBy,
  type ProductList,
} from '@/features/products/domain/models/Product';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';
import { sortByOptions } from '@/features/products/presentation/constants/sortByOptions';
import { mockCategoriesOptions } from '@/features/products/presentation/mocks/categories';
import { useProductListViewModel } from '@/features/products/presentation/screens/ProductList/model';
import { DeepLinkRoutes } from '@/navigation/routes';
import { createTestingQueryProvider } from '@/testing/query';
import type { ProductCategory } from '@/features/products/domain/models/Category';

jest.mock('@/config/deeplink');

describe('useProductListViewModel', () => {
  let mockRepository: MockProxy<ProductsRepository>;

  const getHookInstance = () =>
    renderHook(() => useProductListViewModel({ repository: mockRepository }), {
      wrapper: createTestingQueryProvider(),
    });

  const mockFetchCalls = ({
    products = { products: mockProductList, page: 1, next: 2 },
    categories = mockCategories,
  }: { products?: ProductList; categories?: ProductCategory[] } = {}) => {
    mockRepository.getProductList.mockResolvedValue(products);
    mockRepository.getProductCategoryList.mockResolvedValue(categories);
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockRepository = mock<ProductsRepository>();
  });

  describe('when mounted', () => {
    test('should return correct initial values', () => {
      mockFetchCalls();

      const { result } = getHookInstance();

      expect(result.current).toEqual({
        products: [],
        categoriesOptions: [],
        sortByOptions: sortByOptions,
        filters: mockEmptyFilters,
        isProductsLoading: true,
        isProductsRefreshing: false,
        isFetchingProductsNextPage: false,
        isCategoriesLoading: true,
        onChangeFilters: expect.any(Function),
        onProductPress: expect.any(Function),
        onRefresh: expect.any(Function),
        onProductsListEndReached: expect.any(Function),
      });
    });

    test('should fetch product list', async () => {
      mockFetchCalls();

      const { result } = getHookInstance();

      await waitFor(() =>
        expect(result.current.products).toEqual(mockProductList),
      );
    });

    test('should fetch categories and map it to options', async () => {
      mockFetchCalls({ categories: mockCategories });

      const { result } = getHookInstance();

      await waitFor(() =>
        expect(result.current.categoriesOptions).toEqual(mockCategoriesOptions),
      );
    });
  });

  describe('when onChangeFilters is called', () => {
    beforeEach(() => {
      mockFetchCalls();
    });

    test('should update filters by name', () => {
      const { result } = getHookInstance();

      act(() =>
        result.current.onChangeFilters('sortBy')(ProductSortBy.PRICE_ASC),
      );

      expect(result.current.filters.sortBy).toBe(ProductSortBy.PRICE_ASC);
    });
  });

  describe('when onProductPress is called', () => {
    beforeEach(() => {
      mockFetchCalls();
    });

    test('should call product detail deeplink', () => {
      const { result } = getHookInstance();

      act(() => {
        result.current.onProductPress(mockProductList[0]);
      });

      expect(navigateWithDeepLink).toHaveBeenCalledWith(
        DeepLinkRoutes.productDetail(mockProductList[0].id),
      );
    });
  });

  describe('when onProductsListEndReached is called', () => {
    test('should fetch next page', async () => {
      mockFetchCalls({
        products: { products: mockProductList, page: 1, next: 2 },
      });

      const { result } = getHookInstance();

      await waitFor(() =>
        expect(result.current.products).toEqual(mockProductList),
      );

      act(() => {
        result.current.onProductsListEndReached();
      });

      await waitFor(() =>
        expect(result.current.products).toEqual([
          ...mockProductList,
          ...mockProductList,
        ]),
      );
      expect(mockRepository.getProductList).toHaveBeenCalledTimes(2);
    });

    test('should not fetch next page', async () => {
      mockFetchCalls({
        products: { products: mockProductList, page: 1, next: undefined },
      });

      const { result } = getHookInstance();

      act(() => {
        result.current.onProductsListEndReached();
      });

      expect(mockRepository.getProductList).toHaveBeenCalledTimes(1);
    });
  });

  describe('when onRefetch is called', () => {
    test('should refresh productList', async () => {
      mockFetchCalls({ products: { products: [], page: 1, next: undefined } });

      const { result } = getHookInstance();

      await waitFor(() => expect(result.current.products).toEqual([]));

      mockFetchCalls({
        products: { products: mockProductList, page: 1, next: undefined },
      });

      act(() => {
        result.current.onRefresh();
      });

      await waitFor(() =>
        expect(result.current.products).toEqual(mockProductList),
      );
    });
  });
});
