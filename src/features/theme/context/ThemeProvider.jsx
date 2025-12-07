import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from './ThemeContext';
import { getSystemPreference } from '../utils/getSystemPreference';
import { getTheme } from '../utils/getTheme';
import { THEME } from '../utils/constants';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = getTheme();
    return stored ?? getSystemPreference();
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(THEME.LIGHT, THEME.DARK);
    root.classList.add(theme);

    try {
      localStorage.setItem(THEME.KEY, theme);
    } catch (err) {
      // swallow
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const onChange = (e) => {
      const stored = getTheme();
      if (stored) return;
      setTheme(e.matches ? THEME.DARK : THEME.LIGHT);
    };

    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
    } else {
      mql.addListener(onChange); // legacy fallback
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (!e.key || e.key !== THEME.KEY) return;
      const newVal = e.newValue;
      if (newVal === THEME.DARK || newVal === THEME.LIGHT) {
        setTheme(newVal);
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEME.DARK ? THEME.LIGHT : THEME.DARK));
  }, []);

  const value = {
    theme,
    toggleTheme,
    isDark: theme === THEME.DARK,
    isLight: theme === THEME.LIGHT,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
