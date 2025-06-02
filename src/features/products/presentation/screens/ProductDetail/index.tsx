import { useProductDetailViewModel } from '@/features/products/presentation/screens/ProductDetail/model';
import { ProductDetailView } from '@/features/products/presentation/screens/ProductDetail/view';
import type { ProductsScreenProps } from '@/features/products/routes';

export function ProductDetailScreen({
  route,
}: ProductsScreenProps<'Products.ProductDetail'>) {
  const { product } = route.params;

  const { shouldShowReminderButton, onReminderPress } =
    useProductDetailViewModel({ product });

  return (
    <ProductDetailView
      product={product}
      shouldShowReminderButton={shouldShowReminderButton}
      onReminderPress={onReminderPress}
    />
  );
}
