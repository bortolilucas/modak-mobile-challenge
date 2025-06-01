import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, TextSize } from '@/components';
import { styles } from '@/components/Select/components/SelectBottomSheetListItem/styles';
import type { SelectItem } from '@/components/Select/types';
import { Colors } from '@/theme/colors';

type Props = {
  item: SelectItem;
  isSelected: boolean;
  shouldShowBorder?: boolean;
  onChange: (item: SelectItem) => void;
};

export function SelectBottomSheetListItem({
  item,
  isSelected,
  shouldShowBorder = true,
  onChange,
}: Props) {
  return (
    <TouchableOpacity
      onPress={(): void => onChange(item)}
      style={[styles.containerItem, shouldShowBorder && styles.border]}
      key={item.value}>
      <Text
        size={TextSize.BODY}
        color={isSelected ? Colors.PRIMARY : Colors.TEXT}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}
