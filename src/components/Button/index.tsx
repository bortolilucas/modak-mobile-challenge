import styles from '@/components/Button/styles';
import { Text, TextSize } from '@/components/Text';
import { Colors } from '@/theme/colors';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type Props = Pick<TouchableOpacityProps, 'onPress' | 'children' | 'style'>;

export function Button({ children, style, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text size={TextSize.BODY} color={Colors.SURFACE}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
