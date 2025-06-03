import {
  NavigationContainer,
  type LinkingOptions,
} from '@react-navigation/native';

import { ProductsStack } from '@/features/products/navigation';
import type { ProductsParamList } from '@/features/products/routes';
import { Routes } from '@/navigation/routes';
import { navigationTheme } from '@/theme/colors';

const linking: LinkingOptions<ProductsParamList> = {
  prefixes: ['productsApp://'],
  config: {
    initialRouteName: Routes.Products.ProductList,
    screens: {
      [Routes.Products.ProductDetail]: 'product/:id',
    },
  },
};

export function Navigator() {
  return (
    <NavigationContainer theme={navigationTheme} linking={linking}>
      <ProductsStack />
    </NavigationContainer>
  );
}
