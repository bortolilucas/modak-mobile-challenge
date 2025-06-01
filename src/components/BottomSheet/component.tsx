import React, { useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { type BottomSheetShowOptions } from '@/components/BottomSheet/context';
import styles from '@/components/BottomSheet/styles';
import { verticalScale } from '@/theme/scaling';

export type BottomSheetRef = Modalize | null;

export type Props = {
  ref: React.RefObject<BottomSheetRef>;
  onFinishedHiding: () => void;
} & BottomSheetShowOptions;

export const BottomSheet = ({
  ref,
  list,
  content,
  header,
  onFinishedHiding,
  ...rest
}: Props) => {
  const safeInsets = useSafeAreaInsets();

  const listProps = list
    ? { ...list, contentContainerStyle: { paddingBottom: safeInsets.bottom } }
    : undefined;

  const scrollViewProps = !list
    ? { bounces: false, showsHorizontalScrollIndicator: false }
    : undefined;

  useEffect(() => {
    ref.current?.open();
  }, [ref]);

  return (
    <Modalize
      ref={ref}
      adjustToContentHeight
      modalTopOffset={safeInsets.top - verticalScale(15)}
      modalStyle={styles.modal}
      withHandle={false}
      panGestureEnabled={false}
      disableScrollIfPossible={false}
      HeaderComponent={header}
      flatListProps={listProps}
      scrollViewProps={scrollViewProps}
      onClosed={onFinishedHiding}
      {...rest}>
      {content}
    </Modalize>
  );
};
