import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '@/theme/scaling';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(14),
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(10),
  },
  goBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
});

export default styles;
