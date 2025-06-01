import { scale, verticalScale } from '@/theme/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(18),
    paddingBottom: verticalScale(8),
    paddingHorizontal: scale(16),
    gap: verticalScale(8),
  },
  textCenter: {
    textAlign: 'center',
  },
  button: {
    marginTop: verticalScale(12),
  },
});

export default styles;
