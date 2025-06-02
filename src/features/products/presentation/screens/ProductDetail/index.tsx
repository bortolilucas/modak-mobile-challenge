import { ProductDetailView } from '@/features/products/presentation/screens/ProductDetail/view';
import type { ProductsScreenProps } from '@/features/products/routes';

export function ProductDetailScreen({
  route,
}: ProductsScreenProps<'Products.ProductDetail'>) {
  const { product } = route.params;

  return <ProductDetailView product={product} />;
}
