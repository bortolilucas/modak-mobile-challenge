import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { mock } from 'jest-mock-extended';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { Header } from '@/navigation/components/Header';

const mockProps = mock<NativeStackHeaderProps>({
  options: { title: 'ProductsApp', headerBackTitle: 'Back' },
});

const Container = (props: Partial<NativeStackHeaderProps>) => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <Header {...mockProps} {...props} />
  </SafeAreaProvider>
);

export const Default = () => <Container />;
export const WithBackButton = () => (
  <Container back={{ title: 'Back', href: ' ' }} />
);
