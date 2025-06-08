import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';
import { useMemo, useState, useTransition } from 'react';
import { injectHook, type DependenciesOf } from 'react-obsidian';

import type { SelectItem } from '@/components/Select/types';
import { navigateWithDeepLink } from '@/config/deeplink';
import { ProductsDiGraph } from '@/features/products/di';
import {
  Product,
  type ProductFilters,
  type ProductList,
} from '@/features/products/domain/models/Product';
import { sortByOptions } from '@/features/products/presentation/constants/sortByOptions';
import { DeepLinkRoutes } from '@/navigation/routes';

type Props = DependenciesOf<ProductsDiGraph, 'repository'>;

export function useProductListViewModel({ repository }: Props) {
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<ProductFilters>({
    category: '',
    sortBy: '',
    pageCount: 10,
  });
  const [isProductsRefreshing, startRefreshingTransition] = useTransition();

  const productsQueryKey = ['productList', filters];
  const {
    data: productsPages,
    isLoading: isProductsLoading,
    hasNextPage: hasProductsNextPage,
    isFetchingNextPage: isFetchingProductsNextPage,
    refetch: refetchProducts,
    fetchNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: productsQueryKey,
    queryFn: ({ signal, pageParam }) =>
      repository.getProductList(pageParam, filters, signal),
    getNextPageParam: lastPage => lastPage.next,
  });

  const products = useMemo(
    () => productsPages?.pages?.flatMap(page => page.products) ?? [],
    [productsPages],
  );

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['productCategoryList'],
    queryFn: ({ signal }) => repository.getProductCategoryList(signal),
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
      queryClient.setQueryData(
        productsQueryKey,
        (data: InfiniteData<ProductList>) => ({
          pages: data.pages.slice(0, 1),
          pageParams: data.pageParams.slice(0, 1),
        }),
      );
      await refetchProducts();
    });

  const onProductsListEndReached = () => {
    if (!hasProductsNextPage || isFetchingProductsNextPage) {
      return;
    }

    fetchNextPage();
  };

  return {
    products,
    categoriesOptions,
    sortByOptions,
    filters,
    isProductsLoading,
    isFetchingProductsNextPage,
    isProductsRefreshing,
    isCategoriesLoading,
    onChangeFilters,
    onProductPress,
    onRefresh,
    onProductsListEndReached,
  };
}

export default injectHook(useProductListViewModel, ProductsDiGraph);
