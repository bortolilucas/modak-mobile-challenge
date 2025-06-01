import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { TextSize } from '@/components/Text/styles';
import styles from '@/components/Text/styles';
import { Colors } from '@/theme/colors';

type Props = RNTextProps & {
  size: TextSize;
  color: Colors;
};

export function Text({ size, color, style, ...props }: Props) {
  return <RNText {...props} style={[styles[size], { color }, style]} />;
}

export { TextSize };
