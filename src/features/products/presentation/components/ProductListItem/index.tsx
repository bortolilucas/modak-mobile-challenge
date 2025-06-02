import { Image, TouchableOpacity, View } from 'react-native';

import { IconSize, StarIcon } from '@/assets/icons';
import { Skeleton, Text, TextSize } from '@/components';
import type { Product } from '@/features/products/domain/models/Product';
import { ProductCategoryChip } from '@/features/products/presentation/components/ProductCategoryChip';
import styles from '@/features/products/presentation/components/ProductListItem/styles';
import { Colors } from '@/theme/colors';

type Props = {
  product: Product;
  isLoading: boolean;
  onPress: (product: Product) => void;
};

export function ProductListItem({ product, isLoading, onPress }: Props) {
  if (isLoading) {
    return <Skeleton style={[styles.container, styles.skeleton]} />;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(product)}>
      <View style={styles.containerThumb}>
        <Image source={{ uri: product.thumbnail }} style={styles.thumb} />

        <ProductCategoryChip
          category={product.category}
          style={styles.categoryChip}
        />
      </View>

      <View style={styles.containerInfo}>
        <Text numberOfLines={2} size={TextSize.BODY} color={Colors.TEXT}>
          {product.title}
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.ratingContainer}>
            <StarIcon size={IconSize.SMALL} fill={Colors.PLACEHOLDER} />

            <Text size={TextSize.BODY} color={Colors.PLACEHOLDER}>
              {product.rating}
            </Text>
          </View>

          <Text size={TextSize.BODY} color={Colors.PRIMARY}>
            {product.formattedPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
