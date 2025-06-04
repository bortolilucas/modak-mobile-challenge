import { useQuery } from '@tanstack/react-query';
import { useMemo, useState, useTransition } from 'react';
import { injectHook, type DependenciesOf } from 'react-obsidian';

import type { SelectItem } from '@/components/Select/types';
import { navigateWithDeepLink } from '@/config/deeplink';
import { ProductsDiGraph } from '@/features/products/di';
import {
  Product,
  type ProductFilters,
} from '@/features/products/domain/models/Product';
import { sortByOptions } from '@/features/products/presentation/constants/sortByOptions';
import { DeepLinkRoutes } from '@/navigation/routes';

type Props = DependenciesOf<ProductsDiGraph, 'repository'>;

export function useProductListViewModel({ repository }: Props) {
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

  const categoriesOptions = useMemo<SelectItem[]>(() => {
    if (!categories || categories.length === 0) {
      return [];
    }

    return [
      { label: 'All categories', value: '' },
      ...(categories?.map(category => ({
        label: category.name,
        value: category.slug,
      })) ?? []),
    ];
  }, [categories]);

  const onChangeFilters =
    <T extends keyof ProductFilters>(name: T) =>
    (value: ProductFilters[T]) =>
      setFilters(currentFilters => ({
        ...currentFilters,
        [name]: value,
      }));

  const onProductPress = async (product: Product) => {
    navigateWithDeepLink(DeepLinkRoutes.productDetail(product.id));
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
