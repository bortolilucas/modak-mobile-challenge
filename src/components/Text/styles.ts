import { scale } from '@/theme/scaling';
import { StyleSheet } from 'react-native';

export enum TextSize {
  HEADLINE = 'HEADLINE',
  PARAGRAPH = 'PARAGRAPH',
  LABEL = 'LABEL',
  CAPTION = 'CAPTION',
}

const styles = StyleSheet.create({
  [TextSize.HEADLINE]: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  [TextSize.PARAGRAPH]: {
    fontSize: scale(16),
    fontWeight: 'normal',
  },
  [TextSize.LABEL]: {
    fontSize: scale(16),
    fontWeight: 'semibold',
  },
  [TextSize.CAPTION]: {
    fontSize: scale(12),
    fontWeight: 'semibold',
  },
});

export default styles;
