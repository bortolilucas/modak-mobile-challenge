import { createContext } from 'react';
import type { ModalizeProps } from 'react-native-modalize';

import type { MessageContentProps } from '@/components/BottomSheet/MessageContent';

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
  showMessage: (options: MessageContentProps) => void;
  hide: () => void;
};

export const BottomSheetContext = createContext<BottomSheetContextValue>({
  show: () => undefined,
  showMessage: () => undefined,
  hide: () => undefined,
});
