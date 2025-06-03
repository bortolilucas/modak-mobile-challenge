import type { LinkingOptions } from '@react-navigation/native';
import SendIntentAndroid from 'react-native-send-intent';

import type { ProductsParamList } from '@/features/products/routes';
import { DeepLinkRoutes, Routes } from '@/navigation/routes';
import { Linking, Platform } from 'react-native';

const APP_DEEP_LINK = 'productsApp://';

export const deepLinkingOptions: LinkingOptions<ProductsParamList> = {
  prefixes: [APP_DEEP_LINK],
  config: {
    initialRouteName: Routes.Products.ProductList,
    screens: {
      [Routes.Products.ProductDetail]: DeepLinkRoutes.productDetail(':id'),
    },
  },
};

const createDeepLink = (path: string) => `${APP_DEEP_LINK}${path}`;

export const navigateWithDeepLink = (route: string) => {
  const url = createDeepLink(route);

  if (Platform.OS === 'android') {
    SendIntentAndroid.openAppWithUri(url);
  } else {
    Linking.openURL(url);
  }
};
