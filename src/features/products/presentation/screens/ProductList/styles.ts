import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '@/theme/scaling';

const styles = StyleSheet.create({
  listContent: {
    flexGrow: 1,
    paddingTop: verticalScale(2),
    paddingHorizontal: scale(20),
    gap: verticalScale(14),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  filters: {
    gap: verticalScale(6),
  },
  listFooter: {
    paddingVertical: verticalScale(10),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
