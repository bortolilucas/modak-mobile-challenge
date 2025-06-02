import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import { scale, verticalScale } from '@/theme/scaling';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
    borderRadius: scale(10),
    backgroundColor: Colors.ACCENT,
  },
  value: {
    textTransform: 'capitalize',
  },
});

export default styles;
