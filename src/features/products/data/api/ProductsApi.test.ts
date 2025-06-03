import { mock, type MockProxy } from 'jest-mock-extended';

import { Env } from '@/config/env';
import {
  ProductsApiImpl,
  type ProductsApi,
} from '@/features/products/data/api/ProductsApi';
import {
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
});
