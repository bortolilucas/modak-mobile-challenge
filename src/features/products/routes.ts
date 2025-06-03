import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export const PRODUCTS_ROUTES = {
  ProductList: 'Products.ProductList',
  ProductDetail: 'Products.ProductDetail',
} as const;

export type ProductDetailParams = { id?: number };

export type ProductsParamList = {
  [PRODUCTS_ROUTES.ProductList]: undefined;
  [PRODUCTS_ROUTES.ProductDetail]: ProductDetailParams;
};

export type ProductsScreenProps<T extends keyof ProductsParamList> =
  NativeStackScreenProps<ProductsParamList, T>;
