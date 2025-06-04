import { mockCategories } from '@/features/products/data/mocks/categories';

export const mockCategoriesOptions = [
  { label: 'All categories', value: '' },
  ...mockCategories.map(category => ({
    label: category.name,
    value: category.slug,
  })),
];
