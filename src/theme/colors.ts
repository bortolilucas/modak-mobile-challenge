export enum ThemeColor {
  primary = 'primary',
  background = 'background',
}

export type ThemeColors = Record<ThemeColor, string>;

export const lightColors: ThemeColors = {
  primary: '#006a61',
  background: '#fafdfb',
};

export const darkColors: ThemeColors = {
  primary: '#52dbcb',
  background: '#191c1b',
};
