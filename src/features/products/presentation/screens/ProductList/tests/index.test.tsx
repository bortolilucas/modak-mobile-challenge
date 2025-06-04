import { render } from '@testing-library/react-native';

import { mockEmptyFilters } from '@/features/products/data/mocks/product';
import { ProductListScreen } from '@/features/products/presentation/screens/ProductList';
import useProductListViewModel from '@/features/products/presentation/screens/ProductList/model';
import { ProductListView } from '@/features/products/presentation/screens/ProductList/view';

jest.mock('@/features/products/presentation/screens/ProductList/model');
jest.mock('@/features/products/presentation/screens/ProductList/view', () => ({
  ProductListView: jest.fn(() => null),
}));

const mockUseProductListViewModel =
  useProductListViewModel as jest.MockedFunction<
    typeof useProductListViewModel
  >;

describe('ProductList screen', () => {
  const modelReturnValue: ReturnType<typeof useProductListViewModel> = {
    products: [],
    categoriesOptions: [],
    isCategoriesLoading: false,
    isProductsLoading: false,
    isProductsRefreshing: false,
    sortByOptions: [],
    filters: mockEmptyFilters,
    onChangeFilters: jest.fn(),
    onProductPress: jest.fn(),
    onRefresh: jest.fn(),
  };

  const renderScreen = () => render(<ProductListScreen />);

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseProductListViewModel.mockReturnValue(modelReturnValue);
  });

  test('should useProductListViewModel be called with productId', () => {
    renderScreen();

    expect(useProductListViewModel).toHaveBeenCalledTimes(1);
  });

  test('should render ProductListView with correct props', () => {
    renderScreen();

    expect(ProductListView).toHaveBeenCalledWith(modelReturnValue, undefined);
  });
});
