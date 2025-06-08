import {
  mockEmptyFilters,
  mockProductList,
} from '@/features/products/data/mocks/product';
import { sortByOptions } from '@/features/products/presentation/constants/sortByOptions';
import { mockCategoriesOptions } from '@/features/products/presentation/mocks/categories';

import {
  ProductListView,
  type Props,
} from '@/features/products/presentation/screens/ProductList/view';

const Container = (props: Partial<Props>) => (
  <ProductListView
    products={mockProductList}
    sortByOptions={sortByOptions}
    categoriesOptions={mockCategoriesOptions}
    filters={mockEmptyFilters}
    isCategoriesLoading={false}
    isProductsLoading={false}
    isProductsRefreshing={false}
    isFetchingProductsNextPage={false}
    onChangeFilters={jest.fn(() => () => {})}
    onProductPress={jest.fn()}
    onRefresh={jest.fn()}
    onProductsListEndReached={jest.fn()}
    {...props}
  />
);

export const Default = () => <Container />;
export const ProductsLoading = () => <Container isProductsLoading />;
export const ProductsRefreshing = () => <Container isProductsRefreshing />;
export const CategoriesLoading = () => (
  <Container isCategoriesLoading categoriesOptions={[]} />
);
export const ProductsFetchingNextPage = () => (
  <Container isFetchingProductsNextPage />
);
