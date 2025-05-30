import type { ProductResponse } from '@/features/products/data/models/ProductResponse';

export interface ProductListResponse {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
}
