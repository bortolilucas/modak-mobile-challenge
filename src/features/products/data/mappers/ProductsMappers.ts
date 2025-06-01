import type { ProductDto } from '@/features/products/data/dto/ProductsDto';
import type { ProductParamsDto } from '@/features/products/data/dto/ProductsParamsDto';
import {
  Product,
  type ProductFilters,
} from '@/features/products/domain/models/Product';

export const dtoToProduct = (product: ProductDto): Product =>
  new Product(
    product.id,
    product.title,
    product.thumbnail,
    product.category,
    product.price,
    product.rating,
  );

export const productFiltersToDto = (
  filters: ProductFilters,
): ProductParamsDto => {
  const [sortBy, order] = filters.sortBy.split('_');

  return { sortBy, order };
};
