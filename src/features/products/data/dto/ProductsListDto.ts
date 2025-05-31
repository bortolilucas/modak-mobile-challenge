import type { ProductDto } from '@/features/products/data/dto/ProductDto';

export interface ProductListDto {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}
