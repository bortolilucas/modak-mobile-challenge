import { render } from '@testing-library/react-native';
import { mock } from 'jest-mock-extended';

import { mockProduct } from '@/features/products/data/mocks/product';
import { ProductDetailScreen } from '@/features/products/presentation/screens/ProductDetail';
import useProductDetailViewModel from '@/features/products/presentation/screens/ProductDetail/model';
import { ProductDetailView } from '@/features/products/presentation/screens/ProductDetail/view';
import type { ProductsScreenProps } from '@/features/products/routes';

jest.mock('@/features/products/presentation/screens/ProductDetail/model');
jest.mock(
  '@/features/products/presentation/screens/ProductDetail/view',
  () => ({
    ProductDetailView: jest.fn(() => null),
  }),
);

const mockUseProductDetailViewModel =
  useProductDetailViewModel as jest.MockedFunction<
    typeof useProductDetailViewModel
  >;

describe('ProductDetail screen', () => {
  const screenProps = mock<ProductsScreenProps<'Products.ProductDetail'>>({
    route: {
      params: { id: mockProduct.id },
    },
  });

  const modelReturnValue: ReturnType<typeof useProductDetailViewModel> = {
    product: mockProduct,
    isLoading: false,
    onReminderPress: jest.fn(),
  };

  const renderScreen = () => render(<ProductDetailScreen {...screenProps} />);

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseProductDetailViewModel.mockReturnValue(modelReturnValue);
  });

  test('should useProductDetailViewModel be called with productId', () => {
    renderScreen();

    expect(useProductDetailViewModel).toHaveBeenCalledWith({
      productId: screenProps.route.params.id,
    });
  });

  test('should render ProductDetailView with correct props', () => {
    renderScreen();

    expect(ProductDetailView).toHaveBeenCalledWith(modelReturnValue, undefined);
  });
});
