import { ActivityIndicator, Pressable } from 'react-native';

import { ChevronDownIcon, IconSize } from '@/assets/icons';
import { Text, TextSize } from '@/components';
import { useBottomSheet } from '@/components/BottomSheet';
import { SelectBottomSheetListHeader } from '@/components/Select/components/SelectBottomSheetListHeader';
import { SelectBottomSheetListItem } from '@/components/Select/components/SelectBottomSheetListItem';
import styles from '@/components/Select/styles';
import type { SelectItem } from '@/components/Select/types';
import { Colors } from '@/theme/colors';

type Props<T> = {
  title: string;
  value: T;
  options: SelectItem[];
  isLoading?: boolean;
  onChange: (value: T) => void;
};

export function Select<T>({
  title,
  value,
  options,
  isLoading,
  onChange,
}: Props<T>) {
  const bottomSheet = useBottomSheet();

  const selectedValue = options.find(option => option.value === value);

  const handleSelect = (newValue: T) => {
    onChange(newValue);
    bottomSheet.hide();
  };

  const handlePress = (): void =>
    bottomSheet.show({
      header: (
        <SelectBottomSheetListHeader title={title} onClose={bottomSheet.hide} />
      ),
      list: {
        data: options,
        renderItem: ({ item, index }) => (
          <SelectBottomSheetListItem
            item={item}
            isSelected={!!value && item.value === value}
            shouldShowBorder={index < options.length - 1}
            onChange={(): void => handleSelect(item.value)}
          />
        ),
        showsVerticalScrollIndicator: false,
      },
    });

  return (
    <Pressable style={styles.select} disabled={isLoading} onPress={handlePress}>
      <Text size={TextSize.BODY} color={Colors.TEXT}>
        {isLoading ? 'Loading...' : selectedValue?.label}
      </Text>

      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.PLACEHOLDER} />
      ) : (
        <ChevronDownIcon size={IconSize.XSMALL} fill={Colors.PLACEHOLDER} />
      )}
    </Pressable>
  );
}
