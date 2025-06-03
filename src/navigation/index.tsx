import { NavigationContainer } from '@react-navigation/native';

import { deepLinkingOptions } from '@/config/deeplink';
import { ProductsStack } from '@/features/products/navigation';
import { navigationTheme } from '@/theme/colors';

export function Navigator() {
  return (
    <NavigationContainer theme={navigationTheme} linking={deepLinkingOptions}>
      <ProductsStack />
    </NavigationContainer>
  );
}
