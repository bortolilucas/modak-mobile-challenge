import { PRODUCTS_ROUTES } from '@/features/products/routes';

export const Routes = {
  Products: PRODUCTS_ROUTES,
};

export const DeepLinkRoutes = {
  productDetail: (id: number | string) => `product/${id}`,
};
