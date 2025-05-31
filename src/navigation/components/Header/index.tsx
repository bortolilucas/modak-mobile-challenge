import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, TextSize } from '@/components';
import styles from '@/navigation/components/Header/styles';
import { ThemeColor } from '@/theme/colors';

export function Header(props: NativeStackHeaderProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text size={TextSize.HEADLINE} color={ThemeColor.primary}>
        Products App
      </Text>
    </SafeAreaView>
  );
}
