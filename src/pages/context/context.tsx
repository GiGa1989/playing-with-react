import { createContext, FC, ReactNode, useState } from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

interface IThemeProvider {
  children: ReactNode;
}

const defaultState = {
  dark: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
