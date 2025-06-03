import {
  NavigationContainer,
  type LinkingOptions,
} from '@react-navigation/native';

import { ProductsStack } from '@/features/products/navigation';
import { navigationTheme } from '@/theme/colors';
import type { ProductsParamList } from '@/features/products/routes';

const linking: LinkingOptions<ProductsParamList> = {
  prefixes: ['productsApp://'],
  config: {
    screens: {
      'Products.ProductDetail': 'product/:id',
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
