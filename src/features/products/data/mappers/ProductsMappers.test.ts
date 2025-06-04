import {
  dtoToProduct,
  productFiltersToDto,
} from '@/features/products/data/mappers/ProductsMappers';
import {
  mockFilters,
  mockProduct,
  mockProductDto,
  mockProductParamsDto,
} from '@/features/products/data/mocks/product';

describe('ProductsMappers test', () => {
  describe('when dtoToProduct is called', () => {
    test('should convert to domain', () => {
      const dto = mockProductDto;

      const result = dtoToProduct(dto);

      expect(result).toEqual(mockProduct);
    });
  });

  describe('when productFiltersToDto is called', () => {
    test('should convert to dto', () => {
      const filters = mockFilters;

      const result = productFiltersToDto(filters);

      expect(result).toEqual(mockProductParamsDto);
    });
  });
});
