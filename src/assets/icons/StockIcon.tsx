import Svg, { Path, Polyline } from 'react-native-svg';

import type { SvgIconProps } from '@/assets/icons/types';

export function StockIcon({ size, stroke, ...rest }: SvgIconProps) {
  return (
    <Svg {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
      <Path
        d="M12 22V12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
      <Polyline
        points="3.29 7 12 12 20.71 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
      <Path
        d="m7.5 4.27 9 5.15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
    </Svg>
  );
}
