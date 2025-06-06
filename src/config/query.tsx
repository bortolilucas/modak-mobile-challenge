import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  type DefaultOptions,
} from '@tanstack/react-query';
import { useState } from 'react';

import { useBottomSheet } from '@/components/BottomSheet';
import { getErrorMessage } from '@/infra/httpClient/fetch/errors';

type Props = {
  defaultOptions?: DefaultOptions;
};

export function QueryProvider({
  children,
  defaultOptions,
}: React.PropsWithChildren<Props>) {
  const bottomSheet = useBottomSheet();

  const [queryClient] = useState(() => {
    const queryCache = new QueryCache({
      onError: error => {
        bottomSheet.showMessage({
          title: 'Error',
          message: getErrorMessage(error),
        });
      },
    });

    return new QueryClient({
      queryCache,
      defaultOptions,
    });
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
