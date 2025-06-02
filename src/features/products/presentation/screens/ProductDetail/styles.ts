import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import { scale, verticalScale } from '@/theme/scaling';

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(2),
    paddingHorizontal: scale(20),
    gap: verticalScale(8),
  },
  containerImages: {
    width: '100%',
    height: verticalScale(160),
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderColor: Colors.BORDER,
    marginBottom: verticalScale(2),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryChip: {
    position: 'absolute',
    right: scale(-1),
    bottom: 0,
    borderBottomRightRadius: scale(6),
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    marginBottom: verticalScale(4),
  },
  rowIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  rowInfoCards: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: scale(12),
    marginTop: verticalScale(10),
  },
  reminderButton: {
    marginTop: verticalScale(25),
  },
});

export default styles;
