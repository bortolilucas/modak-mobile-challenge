import useProductListViewModel from './model';
import { ProductListView } from './view';

export function ProductListScreen() {
  const {
    products,
    categoriesOptions,
    sortByOptions,
    filters,
    isCategoriesLoading,
    isProductsLoading,
    isProductsRefreshing,
    onChangeFilters,
    onProductPress,
    onRefresh,
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
      onChangeFilters={onChangeFilters}
      onPressProduct={onProductPress}
      onRefresh={onRefresh}
    />
  );
}
