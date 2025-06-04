import { renderHook, waitFor } from '@testing-library/react-native';
import dayjs from 'dayjs';
import { mock, type MockProxy } from 'jest-mock-extended';

import { mockProduct } from '@/features/products/data/mocks/product';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';
import { useProductDetailViewModel } from '@/features/products/presentation/screens/ProductDetail/model';
import NativeCalendarModule from '@/specs/NativeCalendarModule';
import { createTestingQueryProvider } from '@/testing/query';
import { isAndroid } from '@/utils/platform';

const mockNativeCalendarModule = NativeCalendarModule as jest.MockedObject<
  typeof NativeCalendarModule
>;

const mockIsAndroid = isAndroid as jest.MockedFunction<typeof isAndroid>;

describe('useProductDetailViewModel', () => {
  let mockRepository: MockProxy<ProductsRepository>;

  const currentDate = new Date('2025-06-04T09:00:00Z');

  const getHookInstance = () =>
    renderHook(
      () =>
        useProductDetailViewModel({
          repository: mockRepository,
          productId: mockProduct.id,
        }),
      { wrapper: createTestingQueryProvider() },
    );

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(currentDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockRepository = mock<ProductsRepository>();
    mockIsAndroid.mockReturnValue(false);
    mockRepository.getProductDetail.mockResolvedValue(mockProduct);
  });

  describe('when mounted', () => {
    test('should return correct initial values', () => {
      const { result } = getHookInstance();

      expect(result.current).toEqual({
        product: undefined,
        isLoading: true,
        shouldShowReminderButton: false,
        onReminderPress: expect.any(Function),
      });
    });

    test('should shouldShowReminderButton be true if Android', () => {
      mockIsAndroid.mockReturnValue(true);

      const { result } = getHookInstance();

      expect(result.current.shouldShowReminderButton).toBe(true);
    });

    test('should fetch product detail', async () => {
      const { result } = getHookInstance();

      await waitFor(() => {
        expect(result.current.product).toEqual(mockProduct);
      });
    });
  });

  describe('when onReminderPress is called', () => {
    test('should call addReminderEvent with correct data', async () => {
      mockNativeCalendarModule.addReminderEvent.mockResolvedValue(undefined);

      const { result } = getHookInstance();

      await waitFor(() => {
        expect(result.current.product).toEqual(mockProduct);
      });
      await result.current.onReminderPress();

      expect(mockNativeCalendarModule.addReminderEvent).toHaveBeenCalledWith({
        title: `Purchase Reminder: ${mockProduct.title}`,
        description: `Don't forget to purchase ${mockProduct.title} from the Products App. Price: $${mockProduct.price}`,
        date: dayjs(currentDate)
          .startOf('day')
          .add(1, 'day')
          .set('hour', 9)
          .valueOf(),
      });
    });
  });
});
