import { Colors } from '@/theme/colors';
import { scale, verticalScale } from '@/theme/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(25),
    backgroundColor: Colors.PRIMARY,
    padding: scale(12),
    minHeight: verticalScale(36),
  },
});

export default styles;
