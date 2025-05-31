export interface ProductDimensionsDto {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReviewsDto {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMetaDto {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensionsDto;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReviewsDto[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMetaDto;
  thumbnail: string;
  images: string[];
}
