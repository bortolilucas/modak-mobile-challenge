import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '@/theme/scaling';

const styles = StyleSheet.create({
  listContent: {
    paddingTop: verticalScale(2),
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(20),
    gap: verticalScale(14),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  filters: {
    gap: verticalScale(6),
  },
});

export default styles;
