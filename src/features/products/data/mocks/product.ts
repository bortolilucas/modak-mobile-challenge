import type { ProductListDto } from '@/features/products/data/dto/ProductsDto';
import type { ProductParamsDto } from '@/features/products/data/dto/ProductsParamsDto';

export const mockProductParamsDto: ProductParamsDto = {
  sortBy: 'price',
  order: 'asc',
};

export const mockProductListDto: ProductListDto = {
  products: [],
  total: 0,
  skip: 0,
  limit: 10,
};
