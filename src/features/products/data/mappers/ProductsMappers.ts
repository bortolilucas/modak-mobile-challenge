import type { ProductDto } from '@/features/products/data/dto/ProductDto';
import type { Product } from '@/features/products/domain/models/Product';

export const dtoToDomain = (product: ProductDto): Product => ({
  id: product.id,
  title: product.title,
});
