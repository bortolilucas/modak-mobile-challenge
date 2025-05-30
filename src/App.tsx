import { ThemeProvider } from '@/theme/context';
import { Navigator } from '@/navigation/Navigator';

export default function App() {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
