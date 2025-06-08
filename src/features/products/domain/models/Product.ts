import { formatCurrency } from '@/utils/currency';

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public thumbnail: string,
    public category: string,
    public price: number,
    public rating: number,
    public brand: string,
    public description: string,
    public stock: number,
    public dimensions: ProductDimensions,
  ) {}

  get formattedPrice() {
    return formatCurrency(this.price);
  }

  get formattedDimensions() {
    const { width, depth, height } = this.dimensions;
    return `${width} × ${depth} × ${height}`;
  }
}

export enum ProductSortBy {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  RATING_ASC = 'rating_asc',
  RATING_DESC = 'rating_desc',
}

export interface ProductList {
  products: Product[];
  page: number;
  next?: number;
}

export interface ProductFilters {
  sortBy: ProductSortBy | '';
  category: string;
  pageCount: number;
}
