import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import { scale, verticalScale } from '@/theme/scaling';

export const styles = StyleSheet.create({
  containerItem: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(18),
  },
  border: {
    borderBottomWidth: verticalScale(1),
    borderColor: Colors.BORDER,
  },
});
