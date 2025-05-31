import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { ProductListScreen } from '@/features/products/presentation/screens/ProductList';
import { Header } from '@/navigation/components/Header';

export const PRODUCTS_ROUTES = {
  ProductsList: 'Products.ProductsList',
} as const;

export type ProductsParamList = {
  [PRODUCTS_ROUTES.ProductsList]: undefined;
};

const Stack = createNativeStackNavigator<ProductsParamList>();

const screenOptions: NativeStackNavigationOptions = {
  header: props => <Header {...props} />,
};

export function ProductsStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={PRODUCTS_ROUTES.ProductsList}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
}
