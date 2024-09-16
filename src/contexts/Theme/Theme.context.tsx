import { createContext, useEffect, useState } from 'react';
import { ThemeContextType, ThemeType } from './Theme.types';

export const ThemeContext = createContext<ThemeContextType>({
  appTheme: 'dark',
  setTheme: () => {},
} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [appTheme, setAppTheme] = useState<ThemeType>('light');

  function setTheme() {
    setAppTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(appTheme);
  }, [appTheme]);

  return (
    <ThemeContext.Provider value={{ appTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
