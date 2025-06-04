import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Select } from '@/components';
import type { SelectItem } from '@/components/Select/types';
import {
  Product,
  type ProductFilters,
} from '@/features/products/domain/models/Product';
import { ProductListItem } from '@/features/products/presentation/components/ProductListItem';
import styles from '@/features/products/presentation/screens/ProductList/styles';

export type Props = {
  products: Product[];
  categoriesOptions: SelectItem[];
  sortByOptions: SelectItem[];
  isProductsLoading: boolean;
  isProductsRefreshing: boolean;
  isCategoriesLoading: boolean;
  filters: ProductFilters;
  onChangeFilters: <T extends keyof ProductFilters>(
    name: T,
  ) => (value: ProductFilters[T]) => void;
  onProductPress: (product: Product) => void;
  onRefresh: () => void;
};

const loadingItems = Array.from({ length: 6 }).map(
  (_, index) =>
    new Product(index, '', '', '', 0, 0, '', '', 0, {
      width: 0,
      height: 0,
      depth: 0,
    }),
);

export function ProductListView({
  products,
  categoriesOptions,
  sortByOptions,
  isCategoriesLoading,
  isProductsLoading,
  isProductsRefreshing,
  filters,
  onChangeFilters,
  onProductPress,
  onRefresh,
}: Props) {
  return (
    <FlatList
      numColumns={2}
      initialNumToRender={6}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.columnWrapper}
      ListHeaderComponent={
        <View style={styles.filters}>
          <Select
            title="Filter by category"
            value={filters.category}
            isLoading={isCategoriesLoading}
            options={categoriesOptions}
            onChange={onChangeFilters('category')}
          />
          <Select
            title="Sort options"
            value={filters.sortBy}
            options={sortByOptions}
            onChange={onChangeFilters('sortBy')}
          />
        </View>
      }
      data={isProductsLoading ? loadingItems : products}
      keyExtractor={product => product.id.toString()}
      renderItem={({ item }) => (
        <ProductListItem
          product={item}
          isLoading={isProductsLoading}
          onPress={onProductPress}
        />
      )}
      ListFooterComponent={<SafeAreaView edges={{ bottom: 'maximum' }} />}
      refreshing={isProductsRefreshing}
      onRefresh={isProductsLoading ? undefined : onRefresh}
    />
  );
}
