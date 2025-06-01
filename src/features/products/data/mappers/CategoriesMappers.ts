import type { ProductCategoryDto } from '@/features/products/data/dto/CategoriesDto';
import type { ProductCategory } from '@/features/products/domain/models/Category';

export const dtoToProductCategory = (
  category: ProductCategoryDto,
): ProductCategory => ({
  name: category.name,
  slug: category.slug,
});
