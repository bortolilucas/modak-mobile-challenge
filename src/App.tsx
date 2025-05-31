import { QueryProvider } from '@/config/query';
import { Navigator } from '@/navigation';
import { ThemeProvider } from '@/theme/context';

export default function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </QueryProvider>
  );
}
