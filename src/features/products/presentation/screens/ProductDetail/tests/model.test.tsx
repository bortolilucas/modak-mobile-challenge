import { renderHook, waitFor } from '@testing-library/react-native';
import dayjs from 'dayjs';
import { mock, type MockProxy } from 'jest-mock-extended';

import { useBottomSheet } from '@/components/BottomSheet';
import { mockProduct } from '@/features/products/data/mocks/product';
import type { ProductsRepository } from '@/features/products/domain/repository/ProductsRepository';
import { useProductDetailViewModel } from '@/features/products/presentation/screens/ProductDetail/model';
import NativeCalendarModule from '@/specs/NativeCalendarModule';
import { createTestingQueryProvider } from '@/testing/query';

jest.mock('@/components/BottomSheet');
const mockUseBottomSheet = useBottomSheet as jest.Mock;

const mockNativeCalendarModule = NativeCalendarModule as jest.MockedObject<
  typeof NativeCalendarModule
>;

describe('useProductDetailViewModel', () => {
  const mockBottomSheetShowMessage = jest.fn();

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
    mockUseBottomSheet.mockReturnValue({
      showMessage: mockBottomSheetShowMessage,
    });
    mockRepository.getProductDetail.mockResolvedValue(mockProduct);
  });

  describe('when mounted', () => {
    test('should return correct initial values', () => {
      const { result } = getHookInstance();

      expect(result.current).toEqual({
        product: undefined,
        isLoading: true,
        onReminderPress: expect.any(Function),
      });
    });

    test('should fetch product detail', async () => {
      const { result } = getHookInstance();

      await waitFor(() => {
        expect(result.current.product).toEqual(mockProduct);
      });
    });
  });

  describe('when onReminderPress is called', () => {
    test('should call addReminderEvent with correct data and call bottom sheet success (saved status)', async () => {
      mockNativeCalendarModule.addReminderEvent.mockResolvedValue({
        status: 'saved',
      });

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
      expect(mockBottomSheetShowMessage).toHaveBeenCalledWith({
        title: 'Success',
        message: 'Purchase reminder added successfully',
      });
    });

    test('should call addReminderEvent and not call bottom sheet (other status)', async () => {
      mockNativeCalendarModule.addReminderEvent.mockResolvedValue({
        status: 'cancelled',
      });

      const { result } = getHookInstance();

      await waitFor(() => {
        expect(result.current.product).toEqual(mockProduct);
      });
      await result.current.onReminderPress();

      expect(mockBottomSheetShowMessage).not.toHaveBeenCalled();
    });

    test('should call addReminderEvent and handle error', async () => {
      mockNativeCalendarModule.addReminderEvent.mockRejectedValue(
        new Error('Teste'),
      );

      const { result } = getHookInstance();

      await waitFor(() => {
        expect(result.current.product).toEqual(mockProduct);
      });
      await result.current.onReminderPress();

      expect(mockBottomSheetShowMessage).toHaveBeenCalledWith({
        title: 'Error',
        message: 'Teste',
      });
    });
  });
});
