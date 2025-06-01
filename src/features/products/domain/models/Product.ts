import { formatCurrency } from '@/utils/currency';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public thumbnail: string,
    public category: string,
    public price: number,
    public rating: number,
  ) {}

  get formattedPrice() {
    return formatCurrency(this.price);
  }
}

export enum ProductSortBy {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  RATING_ASC = 'rating_asc',
  RATING_DESC = 'rating_desc',
}

export interface ProductFilters {
  sortBy: ProductSortBy | '';
  category: string;
}
