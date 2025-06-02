import { View, type StyleProp, type ViewStyle } from 'react-native';

import { Text, TextSize } from '@/components';
import styles from '@/features/products/presentation/components/ProductCategoryChip/styles';
import { Colors } from '@/theme/colors';

type Props = {
  category: string;
  textSize?: TextSize;
  style?: StyleProp<ViewStyle>;
};

export function ProductCategoryChip({
  category,
  style,
  textSize = TextSize.CAPTION,
}: Props) {
  return (
    <View style={[styles.chip, style]}>
      <Text size={textSize} color={Colors.SURFACE} style={styles.text}>
        {category}
      </Text>
    </View>
  );
}
