import { DefaultTheme, type Theme } from '@react-navigation/native';

export enum Colors {
  PRIMARY = '#006a61',
  BACKGROUND = '#fafdfb',
  SURFACE = '#fff',
  TEXT = '#191c1b',
  BORDER = '#bec9c6',
  PLACEHOLDER = '#3f4947',
}

export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    primary: Colors.PRIMARY,
    background: Colors.BACKGROUND,
    card: Colors.SURFACE,
    text: Colors.TEXT,
    border: Colors.BORDER,
    notification: Colors.SURFACE,
  },
};
