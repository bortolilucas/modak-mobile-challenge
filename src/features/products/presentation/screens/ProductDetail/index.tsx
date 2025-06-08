import useProductDetailViewModel from '@/features/products/presentation/screens/ProductDetail/model';
import { ProductDetailView } from '@/features/products/presentation/screens/ProductDetail/view';
import type { ProductsScreenProps } from '@/features/products/routes';

export function ProductDetailScreen({
  route,
}: ProductsScreenProps<'Products.ProductDetail'>) {
  const { id: productId } = route.params;

  const { product, isLoading, onReminderPress } = useProductDetailViewModel({
    productId,
  });

  return (
    <ProductDetailView
      product={product}
      isLoading={isLoading}
      onReminderPress={onReminderPress}
    />
  );
}
