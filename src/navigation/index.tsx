import { ProductsStack } from '@/features/products/navigation';
import { navigationTheme } from '@/theme/colors';
import { NavigationContainer } from '@react-navigation/native';

export function Navigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <ProductsStack />
    </NavigationContainer>
  );
}
