import * as states from '@/features/products/presentation/screens/ProductDetail/tests/componentStates';
import { testSnapshots } from '@/testing/snapshots';

describe('ProductDetail view', () => {
  testSnapshots(states);
});
