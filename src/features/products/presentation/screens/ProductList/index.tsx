import useProductListViewModel from '@/features/products/presentation/screens/ProductList/model';
import { ProductListView } from '@/features/products/presentation/screens/ProductList/view';

export function ProductListScreen() {
  const {
    products,
    categoriesOptions,
    sortByOptions,
    filters,
    isCategoriesLoading,
    isProductsLoading,
    isProductsRefreshing,
    isFetchingProductsNextPage,
    onChangeFilters,
    onProductPress,
    onRefresh,
    onProductsListEndReached,
  } = useProductListViewModel();

  return (
    <ProductListView
      products={products}
      categoriesOptions={categoriesOptions}
      sortByOptions={sortByOptions}
      filters={filters}
      isProductsLoading={isProductsLoading}
      isProductsRefreshing={isProductsRefreshing}
      isCategoriesLoading={isCategoriesLoading}
      isFetchingProductsNextPage={isFetchingProductsNextPage}
      onChangeFilters={onChangeFilters}
      onProductPress={onProductPress}
      onRefresh={onRefresh}
      onProductsListEndReached={onProductsListEndReached}
    />
  );
}
