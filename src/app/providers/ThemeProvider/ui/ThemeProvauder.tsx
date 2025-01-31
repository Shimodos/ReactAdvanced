import React, { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeProvauderProps {
  initiTheme?: Theme;
  children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvauder = (props: ThemeProvauderProps) => {
  const { initiTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(initiTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvauder;
