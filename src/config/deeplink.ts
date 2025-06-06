import type { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

import type { ProductsParamList } from '@/features/products/routes';
import { DeepLinkRoutes, Routes } from '@/navigation/routes';
import { isAndroid } from '@/utils/platform';

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

  if (isAndroid()) {
    SendIntentAndroid.openAppWithUri(url);
  } else {
    Linking.openURL(url);
  }
};
