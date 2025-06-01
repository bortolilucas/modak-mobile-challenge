import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';

import { useBottomSheet } from '@/components/BottomSheet';
import { getErrorMessage } from '@/infra/httpClient/fetch/errors';

export function QueryProvider({ children }: React.PropsWithChildren) {
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

    return new QueryClient({ queryCache });
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
