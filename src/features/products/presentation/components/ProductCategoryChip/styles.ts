import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import { scale, verticalScale } from '@/theme/scaling';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    paddingVertical: verticalScale(1.5),
    paddingHorizontal: scale(8),
    borderTopLeftRadius: scale(6),
  },
  text: {
    textTransform: 'capitalize',
  },
});

export default styles;
