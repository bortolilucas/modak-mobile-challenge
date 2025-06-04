import type {
  ProductDto,
  ProductListDto,
} from '@/features/products/data/dto/ProductsDto';
import type { ProductParamsDto } from '@/features/products/data/dto/ProductsParamsDto';
import { mockCategory } from '@/features/products/data/mocks/categories';
import {
  Product,
  ProductSortBy,
  type ProductFilters,
} from '@/features/products/domain/models/Product';

export const mockProductParamsDto: ProductParamsDto = {
  sortBy: 'price',
  order: 'asc',
};

export const mockProductDto: ProductDto = {
  id: 1,
  title: 'Mock product',
  description: '',
  category: 'category-1',
  price: 1,
  discountPercentage: 1,
  rating: 1,
  stock: 1,
  tags: [],
  brand: '',
  sku: '',
  weight: 1,
  dimensions: { width: 0, height: 0, depth: 0 },
  warrantyInformation: '',
  shippingInformation: '',
  availabilityStatus: '',
  reviews: [],
  returnPolicy: '',
  minimumOrderQuantity: 1,
  meta: {
    createdAt: '',
    updatedAt: '',
    barcode: '',
    qrCode: '',
  },
  thumbnail: '',
  images: [],
};

export const mockProductListDto: ProductListDto = {
  products: [mockProductDto],
  total: 1,
  skip: 0,
  limit: 10,
};

export const mockProduct: Product = new Product(
  mockProductDto.id,
  mockProductDto.title,
  mockProductDto.thumbnail,
  mockProductDto.category,
  mockProductDto.price,
  mockProductDto.rating,
  mockProductDto.brand,
  mockProductDto.description,
  mockProductDto.stock,
  {
    width: mockProductDto.dimensions.width,
    height: mockProductDto.dimensions.height,
    depth: mockProductDto.dimensions.depth,
  },
);

export const mockProductList: Product[] = [mockProduct];

export const mockFilters: ProductFilters = {
  sortBy: ProductSortBy.PRICE_ASC,
  category: '',
};

export const mockFiltersWithCategory: ProductFilters = {
  sortBy: ProductSortBy.PRICE_ASC,
  category: mockCategory.slug,
};
