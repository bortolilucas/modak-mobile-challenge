import { ThemeProvider } from '@/core/ui/theme/context';
import { Navigator } from '@/navigation/Navigator';

export default function App() {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
