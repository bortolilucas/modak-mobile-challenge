import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { injectHook, type DependenciesOf } from 'react-obsidian';

import { useBottomSheet } from '@/components/BottomSheet';
import { ProductsDiGraph } from '@/features/products/di';
import { getErrorMessage } from '@/infra/httpClient/fetch/errors';
import type { ReminderEventData } from '@/specs/NativeCalendarModule';
import NativeCalendarModule from '@/specs/NativeCalendarModule';

type Props = DependenciesOf<ProductsDiGraph, 'repository'> & {
  productId: number;
};

export function useProductDetailViewModel({ repository, productId }: Props) {
  const bottomSheet = useBottomSheet();

  const { data: product, isLoading } = useQuery({
    queryKey: ['productDetail', productId],
    queryFn: ({ signal }) => repository.getProductDetail(productId, signal),
  });

  const onReminderPress = async () => {
    try {
      const dateMs = dayjs()
        .startOf('day')
        .add(1, 'day')
        .set('hour', 9)
        .valueOf();

      const data: ReminderEventData = {
        title: `Purchase Reminder: ${product?.title}`,
        description: `Don't forget to purchase ${product?.title} from the Products App. Price: $${product?.price}`,
        date: dateMs,
      };

      const result = await NativeCalendarModule.addReminderEvent(data);

      if (result.status === 'saved') {
        bottomSheet.showMessage({
          title: 'Success',
          message: 'Purchase reminder added successfully',
        });
      }
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
    onReminderPress,
  };
}

export default injectHook(useProductDetailViewModel, ProductsDiGraph);
