import useProductListViewModel from '@/features/products/presentation/screens/ProductList/model';
import { ProductListView } from '@/features/products/presentation/screens/ProductList/view';
import type { ProductsScreenProps } from '@/features/products/routes';

export function ProductListScreen({
  navigation,
}: ProductsScreenProps<'Products.ProductList'>) {
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
  } = useProductListViewModel({ navigation });

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
