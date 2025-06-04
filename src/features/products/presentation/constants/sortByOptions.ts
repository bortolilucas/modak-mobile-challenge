import type { SelectItem } from '@/components/Select/types';
import { ProductSortBy } from '@/features/products/domain/models/Product';

export const sortByOptions: SelectItem[] = [
  { label: 'Sort by', value: '' },
  { label: 'Price: Low to High', value: ProductSortBy.PRICE_ASC },
  { label: 'Price: High to Low', value: ProductSortBy.PRICE_DESC },
  { label: 'Lowest Rating', value: ProductSortBy.RATING_ASC },
  { label: 'Highest Rating', value: ProductSortBy.RATING_DESC },
];
