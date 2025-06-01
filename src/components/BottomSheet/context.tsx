import { createContext } from 'react';
import type { ModalizeProps } from 'react-native-modalize';

type BottomSheetContentModeProps = {
  content: React.ReactNode;
  header?: never;
  list?: never;
};
type BottomSheetListModeProps = {
  header: React.ReactNode;
  list: ModalizeProps['flatListProps'];
  content?: never;
};

export type BottomSheetShowOptions =
  | BottomSheetContentModeProps
  | BottomSheetListModeProps;

export type BottomSheetContextValue = {
  show: (options: BottomSheetShowOptions) => void;
  hide: () => void;
};

export const BottomSheetContext = createContext<BottomSheetContextValue>({
  show: () => undefined,
  hide: () => undefined,
});
