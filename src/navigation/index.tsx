import { ProductsStack } from '@/features/products/navigation';
import { NavigationContainer } from '@react-navigation/native';

export function Navigator() {
  return (
    <NavigationContainer>
      <ProductsStack />
    </NavigationContainer>
  );
}
