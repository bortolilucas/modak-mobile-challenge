import { View } from 'react-native';

import { IconSize, type SvgIconProps } from '@/assets/icons';
import { Text, TextSize } from '@/components';
import styles from '@/features/products/presentation/components/ProductInfoCard/styles';
import { Colors } from '@/theme/colors';

type Props = {
  Icon?: React.ComponentType<SvgIconProps>;
  label: string;
  value: string;
};

export function ProductInfoCard({ Icon, label, value }: Props) {
  return (
    <View style={styles.container}>
      {!!Icon && <Icon size={IconSize.SMALL} stroke={Colors.PRIMARY} />}

      <View>
        <Text size={TextSize.CAPTION} color={Colors.PLACEHOLDER}>
          {label}
        </Text>

        <Text size={TextSize.BODY} color={Colors.TEXT} style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  );
}
