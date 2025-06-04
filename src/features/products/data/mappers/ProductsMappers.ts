import type {
  ProductDimensionsDto,
  ProductDto,
} from '@/features/products/data/dto/ProductsDto';
import type { ProductParamsDto } from '@/features/products/data/dto/ProductsParamsDto';
import {
  Product,
  type ProductDimensions,
  type ProductFilters,
} from '@/features/products/domain/models/Product';

const dtoToProductDimensions = (
  dimensions: ProductDimensionsDto,
): ProductDimensions => ({
  width: dimensions.width,
  height: dimensions.height,
  depth: dimensions.depth,
});

export const dtoToProduct = (product: ProductDto): Product =>
  new Product(
    product.id,
    product.title,
    product.thumbnail,
    product.category,
    product.price,
    product.rating,
    product.brand,
    product.description,
    product.stock,
    dtoToProductDimensions(product.dimensions),
  );

export const productFiltersToDto = (
  filters: ProductFilters,
): ProductParamsDto => {
  const [sortBy, order] = filters.sortBy.split('_');

  return { sortBy, order };
};
