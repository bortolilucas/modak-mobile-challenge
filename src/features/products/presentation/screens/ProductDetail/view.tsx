import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DimensionsIcon, IconSize, StarIcon, StockIcon } from '@/assets/icons';
import { Text, TextSize } from '@/components';
import type { Product } from '@/features/products/domain/models/Product';
import { ProductCategoryChip } from '@/features/products/presentation/components/ProductCategoryChip';
import { ProductInfoCard } from '@/features/products/presentation/components/ProductInfoCard';
import styles from '@/features/products/presentation/screens/ProductDetail/styles';
import { Colors } from '@/theme/colors';
import { plural } from '@/utils/strings';

type Props = {
  product: Product;
};

export function ProductDetailView({ product }: Props) {
  return (
    <ScrollView>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <View style={styles.containerImages}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            resizeMode="contain"
          />

          <ProductCategoryChip
            category={product.category}
            style={styles.categoryChip}
          />
        </View>

        <Text size={TextSize.H1} color={Colors.TEXT}>
          {product.title}
        </Text>

        <View style={styles.rowInfo}>
          <View style={styles.rowIcon}>
            <StarIcon size={IconSize.SMALL} fill={Colors.PLACEHOLDER} />

            <Text size={TextSize.BODY} color={Colors.PLACEHOLDER}>
              {product.rating}
            </Text>
          </View>

          <Text size={TextSize.BODY} color={Colors.PLACEHOLDER}>
            Brand: {product.brand}
          </Text>
        </View>

        <Text size={TextSize.BODY} color={Colors.TEXT}>
          {product.description}
        </Text>

        <View style={styles.rowInfoCards}>
          <ProductInfoCard
            Icon={StockIcon}
            label="Stock"
            value={`${product.stock} ${plural(product.stock, 'Unit')}`}
          />
          <ProductInfoCard
            Icon={DimensionsIcon}
            label="Dimensions (w x d x h)"
            value={product.formattedDimensions}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
