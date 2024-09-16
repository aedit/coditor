export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
  appTheme: ThemeType;
  setTheme: () => void;
};
