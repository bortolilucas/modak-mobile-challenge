import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { TextSize } from '@/components/Text/styles';
import styles from '@/components/Text/styles';
import type { ThemeColor } from '@/theme/colors';
import { useTheme } from '@/theme/context';

interface Props extends RNTextProps {
  size: TextSize;
  color: ThemeColor;
}

export function Text({ size, color, style, ...props }: Props) {
  const { colors } = useTheme();

  return (
    <RNText
      {...props}
      style={[styles[size], { color: colors[color] }, style]}
    />
  );
}

export { TextSize };
