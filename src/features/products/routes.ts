import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { Product } from '@/features/products/domain/models/Product';

export const PRODUCTS_ROUTES = {
  ProductList: 'Products.ProductList',
  ProductDetail: 'Products.ProductDetail',
} as const;

export type ProductDetailParams = { id?: number; product?: Product };

export type ProductsParamList = {
  [PRODUCTS_ROUTES.ProductList]: undefined;
  [PRODUCTS_ROUTES.ProductDetail]: ProductDetailParams;
};

export type ProductsScreenProps<T extends keyof ProductsParamList> =
  NativeStackScreenProps<ProductsParamList, T>;
