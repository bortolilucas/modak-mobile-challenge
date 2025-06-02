import Svg, { Path, Rect } from 'react-native-svg';

import type { SvgIconProps } from '@/assets/icons/types';

export function DimensionsIcon({ size, stroke, ...rest }: SvgIconProps) {
  return (
    <Svg
      {...rest}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={stroke}>
      <Path d="M12 15v-3.014" />
      <Path d="M16 15v-3.014" />
      <Path d="M20 6H4" />
      <Path d="M20 8V4" />
      <Path d="M4 8V4" />
      <Path d="M8 15v-3.014" />
      <Rect x="3" y="12" width="18" height="7" rx="1" />
    </Svg>
  );
}
