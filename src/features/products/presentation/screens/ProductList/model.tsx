import { useQuery } from '@tanstack/react-query';
import { injectHook, type DependenciesOf } from 'react-obsidian';

import { ProductsDiGraph } from '@/features/products/di';

type Props = DependenciesOf<ProductsDiGraph, 'repository'>;

export function useProductListModel({ repository }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ['productList'],
    queryFn: () => repository.getProductList(),
  });

  return { data, isLoading };
}

export default injectHook(useProductListModel, ProductsDiGraph);
