import Svg, { Path } from 'react-native-svg';

import type { SvgIconProps } from '@/assets/icons/types';

export function ChevronDownIcon({ size, fill, ...rest }: SvgIconProps) {
  return (
    <Svg {...rest} width={size} height={size} viewBox="0 0 14 10">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.00016 0.833496L7.00016 5.8335L12.0002 0.833496L13.6668 2.50016L7.00016 9.16683L0.333496 2.50016L2.00016 0.833496Z"
        fill={fill}
      />
    </Svg>
  );
}
