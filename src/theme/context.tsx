import { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { darkColors, lightColors, type Colors } from '@/theme/colors';

interface ThemeContextValue {
  colors: Colors;
}

export const ThemeContext = createContext<ThemeContextValue>({
  colors: lightColors,
});

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme();

  const value = useMemo<ThemeContextValue>(
    () => ({
      colors: colorScheme === 'dark' ? darkColors : lightColors,
    }),
    [colorScheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
