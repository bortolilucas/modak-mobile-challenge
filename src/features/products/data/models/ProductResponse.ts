export interface ProductDimensionsResponse {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReviewsResponse {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMetaResponse {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductResponse {
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
  dimensions: ProductDimensionsResponse;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReviewsResponse[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMetaResponse;
  thumbnail: string;
  images: string[];
}
