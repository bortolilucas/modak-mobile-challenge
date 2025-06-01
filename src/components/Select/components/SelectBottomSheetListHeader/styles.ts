import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '@/theme/scaling';

export const styles = StyleSheet.create({
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: verticalScale(14),
    paddingBottom: verticalScale(12),
    paddingHorizontal: scale(20),
  },
  title: {
    flex: 1,
    paddingTop: scale(2),
  },
  closeButton: {
    paddingTop: scale(8),
  },
});
