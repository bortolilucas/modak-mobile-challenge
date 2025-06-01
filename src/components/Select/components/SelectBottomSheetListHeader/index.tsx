import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CloseIcon, IconSize } from '@/assets/icons';
import { Text, TextSize } from '@/components';
import { styles } from '@/components/Select/components/SelectBottomSheetListHeader/styles';
import { Colors } from '@/theme/colors';

type Props = {
  title: string;
  onClose: () => void;
};

export function SelectBottomSheetListHeader({ title, onClose }: Props) {
  return (
    <View style={styles.rowHeader}>
      <Text size={TextSize.H2} color={Colors.TEXT} style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <CloseIcon size={IconSize.SMALL} fill={Colors.TEXT} />
      </TouchableOpacity>
    </View>
  );
}
