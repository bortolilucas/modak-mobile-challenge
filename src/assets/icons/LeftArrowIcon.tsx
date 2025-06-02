import Svg, { Path } from 'react-native-svg';

import type { SvgIconProps } from '@/assets/icons/types';

export function LeftArrowIcon({ size, stroke, ...rest }: SvgIconProps) {
  return (
    <Svg {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="m12 19-7-7 7-7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
      <Path
        d="M19 12H5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
    </Svg>
  );
}
