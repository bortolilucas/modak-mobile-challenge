import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scaling';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.SURFACE,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
});

export default styles;
