import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, TextSize } from '@/components';
import styles from '@/navigation/components/Header/styles';
import { Colors } from '@/theme/colors';

export function Header(props: NativeStackHeaderProps) {
  const safeInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: safeInsets.top + styles.container.paddingBottom },
      ]}>
      <Text size={TextSize.H1} color={Colors.PRIMARY}>
        Products App
      </Text>
    </View>
  );
}
