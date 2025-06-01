import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scaling';

const styles = StyleSheet.create({
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
    borderWidth: scale(1),
    borderColor: Colors.BORDER,
    borderRadius: scale(10),
  },
});

export default styles;
