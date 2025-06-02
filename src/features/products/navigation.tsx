import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { ProductDetailScreen } from '@/features/products/presentation/screens/ProductDetail';
import { ProductListScreen } from '@/features/products/presentation/screens/ProductList';
import {
  PRODUCTS_ROUTES,
  type ProductsParamList,
} from '@/features/products/routes';
import { Header } from '@/navigation/components/Header';

const Stack = createNativeStackNavigator<ProductsParamList>();

const screenOptions: NativeStackNavigationOptions = {
  header: props => <Header {...props} />,
};

export function ProductsStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={PRODUCTS_ROUTES.ProductList}
        component={ProductListScreen}
        options={{ title: 'ProductsApp' }}
      />
      <Stack.Screen
        name={PRODUCTS_ROUTES.ProductDetail}
        component={ProductDetailScreen}
        options={{ headerBackTitle: 'Back' }}
      />
    </Stack.Navigator>
  );
}
