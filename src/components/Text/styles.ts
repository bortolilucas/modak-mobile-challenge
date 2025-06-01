import { scale } from '@/theme/scaling';
import { StyleSheet } from 'react-native';

export enum TextSize {
  H1 = 'H1',
  H2 = 'H2',
  BODY = 'BODY',
  CAPTION = 'CAPTION',
}

const styles = StyleSheet.create({
  [TextSize.H1]: {
    fontSize: scale(24),
    lineHeight: scale(32),
    fontWeight: '700',
  },
  [TextSize.H2]: {
    fontSize: scale(18),
    lineHeight: scale(24),
    fontWeight: '600',
  },
  [TextSize.BODY]: {
    fontSize: scale(14),
    lineHeight: scale(18),
    fontWeight: '500',
  },
  [TextSize.CAPTION]: {
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(16),
  },
});

export default styles;
