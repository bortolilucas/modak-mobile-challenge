import type { ProductCategoryDto } from '@/features/products/data/dto/CategoriesDto';
import type { ProductCategory } from '@/features/products/domain/models/Category';

export const mockCategoriesDto: ProductCategoryDto[] = Array.from({
  length: 4,
}).map((_, index) => ({
  name: `Category ${index}`,
  slug: `category-${index}`,
  url: 'https://category-mock.com',
}));

export const mockCategoryDto: ProductCategoryDto = mockCategoriesDto[0];

export const mockCategories: ProductCategory[] = mockCategoriesDto.map(dto => ({
  name: dto.name,
  slug: dto.slug,
}));

export const mockCategory: ProductCategory = mockCategories[0];
