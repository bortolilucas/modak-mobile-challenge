import type { SvgProps } from 'react-native-svg';

import { scale } from '@/theme/scaling';

export enum IconSize {
  XSMALL = scale(12),
  SMALL = scale(16),
  MEDIUM = scale(24),
}

export type SvgIconProps = SvgProps & {
  size: IconSize;
};
