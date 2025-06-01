import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BottomSheetProvider } from '@/components/BottomSheet';
import { QueryProvider } from '@/config/query';
import { Navigator } from '@/navigation';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <QueryProvider>
          <BottomSheetProvider>
            <Navigator />
          </BottomSheetProvider>
        </QueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
