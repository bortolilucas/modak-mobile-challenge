import { ThemeProvider } from '@/theme/context';
import { Navigator } from '@/navigation/Navigator';
import { QueryProvider } from '@/config/query';

export default function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </QueryProvider>
  );
}
