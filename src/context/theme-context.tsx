import { createContext, useCallback, useEffect, useState } from 'react';

export const accentPalettes = ['sky', 'violet', 'emerald', 'rose'] as const;
export type AccentPalette = (typeof accentPalettes)[number];

const initialState = {
  isDark: false,
  toggleTheme: () => {},
  setIsDarkMode: (theme: boolean) => {},
  accent: 'sky' as AccentPalette,
  setAccent: (_accent: AccentPalette) => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>();
  const [accent, setAccent] = useState<AccentPalette>('sky');

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const setIsDarkMode = useCallback((theme: boolean) => {
    setIsDark(theme);
  }, []);

  // SETTING THEMES ACCORDING TO DEVICE
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setIsDarkMode(e.matches);
      });
  }, [setIsDarkMode]);

  useEffect(() => {
    const savedAccent = window.localStorage.getItem('portfolio-accent');
    if (accentPalettes.includes(savedAccent as AccentPalette)) {
      setAccent(savedAccent as AccentPalette);
    }
  }, []);

  useEffect(() => {
    if (isDark === undefined) return;

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    window.localStorage.setItem('portfolio-accent', accent);
  }, [accent]);

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark === undefined ? false : isDark,
        toggleTheme,
        setIsDarkMode,
        accent,
        setAccent,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext as default };
