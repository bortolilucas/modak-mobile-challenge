import type { ProductResponse } from '@/features/products/data/models/ProductResponse';
import type { Product } from '@/features/products/domain/models/Product';

export const mapProductToDomain = (product: ProductResponse): Product => ({
  id: product.id,
  title: product.title,
});
