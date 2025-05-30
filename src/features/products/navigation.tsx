import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductListScreen } from '@/features/products/presentation/screens/ProductList';

export const PRODUCTS_ROUTES = {
  ProductsList: 'Products.ProductsList',
} as const;

export type ProductsParamList = {
  [PRODUCTS_ROUTES.ProductsList]: undefined;
};

const Stack = createNativeStackNavigator<ProductsParamList>();

export function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PRODUCTS_ROUTES.ProductsList}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
}
