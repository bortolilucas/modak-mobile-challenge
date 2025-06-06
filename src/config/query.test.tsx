import { useQuery } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';

import { QueryProvider } from './query';
import { useBottomSheet } from '@/components/BottomSheet';

jest.mock('@/components/BottomSheet');
const mockUseBottomSheet = useBottomSheet as jest.Mock;

describe('QueryProvider', () => {
  const mockBottomSheetShowMessage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseBottomSheet.mockReturnValue({
      showMessage: mockBottomSheetShowMessage,
    });
  });

  describe('when query error occurs', () => {
    const errorMessage = 'Test error';

    const ThrowQueryError = () => {
      useQuery({
        queryKey: ['test'],
        queryFn: () => {
          throw new Error(errorMessage);
        },
      });

      return <Text>Test</Text>;
    };

    const QueryProviderContainer = ({ children }: React.PropsWithChildren) => (
      <QueryProvider defaultOptions={{ queries: { gcTime: 0, retry: false } }}>
        {children}
      </QueryProvider>
    );

    test('should calls bottomSheet showMessage on query error', async () => {
      render(<ThrowQueryError />, { wrapper: QueryProviderContainer });

      await waitFor(() => {
        expect(mockBottomSheetShowMessage).toHaveBeenCalledWith({
          title: 'Error',
          message: errorMessage,
        });
      });
    });
  });
});
