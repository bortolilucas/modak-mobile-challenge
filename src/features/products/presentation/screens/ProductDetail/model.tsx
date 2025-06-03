import { useQuery } from '@tanstack/react-query';
import { Platform } from 'react-native';
import { injectHook, type DependenciesOf } from 'react-obsidian';

import { useBottomSheet } from '@/components/BottomSheet';
import { ProductsDiGraph } from '@/features/products/di';
import type { Product } from '@/features/products/domain/models/Product';
import { getErrorMessage } from '@/infra/httpClient/fetch/errors';
import type { ReminderEventData } from '@/specs/NativeCalendarModule';
import NativeCalendarModule from '@/specs/NativeCalendarModule';

type Props = DependenciesOf<ProductsDiGraph, 'repository'> & {
  productId?: number;
  initialProduct?: Product;
};

function useProductDetailViewModel({
  repository,
  productId,
  initialProduct,
}: Props) {
  const bottomSheet = useBottomSheet();

  const { data: product, isLoading } = useQuery({
    initialData: initialProduct,
    enabled: !!productId,
    queryKey: ['productDetail', productId, initialProduct],
    queryFn: () =>
      productId ? repository.getProductDetail(productId) : initialProduct,
  });

  const onReminderPress = async () => {
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(9, 0, 0, 0);

      const data: ReminderEventData = {
        title: `Purchase Reminder: ${product?.title}`,
        description: `Don't forget to purchase ${product?.title} from the Products App. Price: $${product?.price}`,
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
    product,
    isLoading,
    shouldShowReminderButton: Platform.OS === 'android',
    onReminderPress,
  };
}

export default injectHook(useProductDetailViewModel, ProductsDiGraph);
