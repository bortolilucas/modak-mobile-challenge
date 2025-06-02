import { useQuery } from '@tanstack/react-query';
import { useMemo, useState, useTransition } from 'react';
import { injectHook, type DependenciesOf } from 'react-obsidian';

import type { SelectItem } from '@/components/Select/types';
import { ProductsDiGraph } from '@/features/products/di';
import {
  Product,
  ProductSortBy,
  type ProductFilters,
} from '@/features/products/domain/models/Product';
import type { ProductsScreenProps } from '@/features/products/routes';
import { Routes } from '@/navigation/routes';

type Props = DependenciesOf<ProductsDiGraph, 'repository'> & {
  navigation: ProductsScreenProps<'Products.ProductList'>['navigation'];
};

const sortByOptions: SelectItem[] = [
  { label: 'Sort by', value: '' },
  { label: 'Price: Low to High', value: ProductSortBy.PRICE_ASC },
  { label: 'Price: High to Low', value: ProductSortBy.PRICE_DESC },
  { label: 'Lowest Rating', value: ProductSortBy.RATING_ASC },
  { label: 'Highest Rating', value: ProductSortBy.RATING_DESC },
];

export function useProductListViewModel({ navigation, repository }: Props) {
  const [filters, setFilters] = useState<ProductFilters>({
    category: '',
    sortBy: '',
  });
  const [isProductsRefreshing, startRefreshingTransition] = useTransition();

  const {
    data: products,
    isLoading: isProductsLoading,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ['productList', filters],
    queryFn: () => repository.getProductList(filters),
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['productCategoryList'],
    queryFn: () => repository.getProductCategoryList(),
  });

  const categoriesOptions = useMemo<SelectItem[]>(
    () => [
      { label: 'All categories', value: '' },
      ...(categories?.map(category => ({
        label: category.name,
        value: category.slug,
      })) ?? []),
    ],
    [categories],
  );

  const onChangeFilters =
    <T extends keyof ProductFilters>(name: T) =>
    (value: ProductFilters[T]) =>
      setFilters(currentFilters => ({
        ...currentFilters,
        [name]: value,
      }));

  const onProductPress = (product: Product) => {
    navigation.navigate(Routes.Products.ProductDetail, { product });
  };

  const onRefresh = () =>
    startRefreshingTransition(async () => {
      await refetchProducts();
    });

  return {
    products: products ?? [],
    categoriesOptions,
    sortByOptions,
    filters,
    isProductsLoading,
    isProductsRefreshing,
    isCategoriesLoading,
    onChangeFilters,
    onProductPress,
    onRefresh: onRefresh,
  };
}

export default injectHook(useProductListViewModel, ProductsDiGraph);
