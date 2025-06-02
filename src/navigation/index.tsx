import { NavigationContainer } from '@react-navigation/native';

import { ProductsStack } from '@/features/products/navigation';
import { navigationTheme } from '@/theme/colors';

export function Navigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <ProductsStack />
    </NavigationContainer>
  );
}
