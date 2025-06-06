import * as states from '@/navigation/components/Header/tests/componentStates';
import { testSnapshots } from '@/testing/snapshots';

describe('Header', () => {
  testSnapshots(states);
});
