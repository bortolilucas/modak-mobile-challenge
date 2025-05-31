import useProductListModel from './model';
import { ProductListView } from './view';

export function ProductListScreen() {
  const { data, isLoading } = useProductListModel();

  return <ProductListView isLoading={isLoading} />;
}
