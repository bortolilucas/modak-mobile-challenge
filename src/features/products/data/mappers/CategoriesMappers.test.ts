import { dtoToProductCategory } from '@/features/products/data/mappers/CategoriesMappers';
import {
  mockCategory,
  mockCategoryDto,
} from '@/features/products/data/mocks/categories';

describe('CategoriesMapper test', () => {
  describe('when dtoToProductCategory is called', () => {
    test('should convert to domain', () => {
      const dto = mockCategoryDto;

      const result = dtoToProductCategory(dto);

      expect(result).toEqual(mockCategory);
    });
  });
});
