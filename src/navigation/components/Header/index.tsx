import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconSize, LeftArrowIcon } from '@/assets/icons';
import { Text, TextSize } from '@/components';
import styles from '@/navigation/components/Header/styles';
import { Colors } from '@/theme/colors';
import { verticalScale } from '@/theme/scaling';

export function Header({ back, options, navigation }: NativeStackHeaderProps) {
  const safeInsets = useSafeAreaInsets();

  const { title, headerBackTitle } = options;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: safeInsets.top + verticalScale(8) },
      ]}>
      {!!back && (
        <TouchableOpacity
          style={styles.goBackContainer}
          onPress={navigation.goBack}>
          <LeftArrowIcon size={IconSize.MEDIUM} stroke={Colors.PRIMARY} />
          {!!headerBackTitle && (
            <Text size={TextSize.H3} color={Colors.PRIMARY}>
              {headerBackTitle}
            </Text>
          )}
        </TouchableOpacity>
      )}

      {!!title && (
        <Text size={TextSize.H1} color={Colors.PRIMARY}>
          {title}
        </Text>
      )}
    </View>
  );
}
