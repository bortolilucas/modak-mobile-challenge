import { useContext, useMemo, useRef, useState } from 'react';

import {
  BottomSheet,
  type BottomSheetRef,
} from '@/components/BottomSheet/component';
import {
  BottomSheetContext,
  type BottomSheetContextValue,
  type BottomSheetShowOptions,
} from '@/components/BottomSheet/context';

export const BottomSheetProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheetRef | null>(null);
  const [currProps, setCurrProps] = useState<BottomSheetShowOptions | null>(
    null,
  );

  const value = useMemo<BottomSheetContextValue>(
    () => ({
      show: setCurrProps,
      hide: () => bottomSheetRef.current?.close(),
    }),
    [],
  );

  const onFinishedHiding = (): void => setCurrProps(null);

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
      {!!currProps && (
        <BottomSheet
          {...currProps}
          ref={bottomSheetRef}
          onFinishedHiding={onFinishedHiding}
        />
      )}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = (): BottomSheetContextValue =>
  useContext(BottomSheetContext);
