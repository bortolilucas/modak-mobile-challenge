import { Linking } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

import { navigateWithDeepLink } from '@/config/deeplink';
import { DeepLinkRoutes } from '@/navigation/routes';
import { isAndroid } from '@/utils/platform';

jest.mock('@/utils/platform');

const mockedIsAndroid = isAndroid as jest.MockedFunction<typeof isAndroid>;

describe('Deeplink config', () => {
  const baseDeepLink = 'productsApp://';

  describe('when navigateWithDeepLink', () => {
    const route = DeepLinkRoutes.productDetail(1);
    const deeplink = `${baseDeepLink}${route}`;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should open deeplink (android)', () => {
      mockedIsAndroid.mockReturnValue(true);
      navigateWithDeepLink(route);

      expect(SendIntentAndroid.openAppWithUri).toHaveBeenCalledWith(deeplink);
    });

    test('should open deeplink (ios)', () => {
      mockedIsAndroid.mockReturnValue(false);
      navigateWithDeepLink(route);

      expect(Linking.openURL).toHaveBeenCalledWith(deeplink);
    });
  });
});
