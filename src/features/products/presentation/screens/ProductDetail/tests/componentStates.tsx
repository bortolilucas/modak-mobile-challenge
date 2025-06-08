import { mockProduct } from '@/features/products/data/mocks/product';
import {
  ProductDetailView,
  type Props,
} from '@/features/products/presentation/screens/ProductDetail/view';

const Container = (props: Partial<Props>) => (
  <ProductDetailView
    product={mockProduct}
    isLoading={false}
    onReminderPress={jest.fn()}
    {...props}
  />
);

export const Default = () => <Container />;
export const Loading = () => <Container isLoading />;
