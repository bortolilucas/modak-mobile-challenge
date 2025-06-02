import { Platform } from 'react-native';

import { useBottomSheet } from '@/components/BottomSheet';
import type { Product } from '@/features/products/domain/models/Product';
import { getErrorMessage } from '@/infra/httpClient/fetch/errors';
import type { ReminderEventData } from '@/specs/NativeCalendarModule';
import NativeCalendarModule from '@/specs/NativeCalendarModule';

type Props = {
  product: Product;
};

export function useProductDetailViewModel({ product }: Props) {
  const bottomSheet = useBottomSheet();

  const onReminderPress = async () => {
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(9, 0, 0, 0);

      const data: ReminderEventData = {
        title: `Purchase Reminder: ${product.title}`,
        description: `Don't forget to purchase ${product.title} from the Products App. Price: $${product.price}`,
        date: tomorrow.getTime(),
      };

      await NativeCalendarModule.addReminderEvent(data);
    } catch (error) {
      bottomSheet.showMessage({
        title: 'Error',
        message: getErrorMessage(error),
      });
    }
  };

  return {
    shouldShowReminderButton: Platform.OS === 'android',
    onReminderPress,
  };
}
