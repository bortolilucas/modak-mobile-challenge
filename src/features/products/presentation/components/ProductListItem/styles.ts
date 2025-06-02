import { Colors } from '@/theme/colors';
import { scale, verticalScale } from '@/theme/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: scale(10),
    backgroundColor: Colors.SURFACE,
    borderWidth: scale(1),
    borderColor: Colors.BORDER,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  containerThumb: {
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    height: verticalScale(125),
    overflow: 'hidden',
    width: '100%',
  },
  thumb: {
    width: '100%',
    height: '100%',
  },
  categoryChip: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  containerInfo: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    gap: verticalScale(8),
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  skeleton: {
    height: verticalScale(200),
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default styles;
