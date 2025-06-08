import * as states from '@/features/products/presentation/screens/ProductList/tests/componentStates';
import { testSnapshots } from '@/testing/snapshots';

describe('ProductList view', () => {
  testSnapshots(states);
});
