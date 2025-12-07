import clsx from 'clsx';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'relative flex h-8 w-8 items-center justify-center',
        'cursor-pointer rounded-full transition-colors duration-300',
        'hover:bg-background-secondary',
        className
      )}
      aria-label="Toggle theme"
    >
      <SunIcon
        className={clsx(
          'absolute h-4 w-4 transition-all duration-300 md:h-5 md:w-5',
          theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
        )}
        strokeWidth={1.3}
      />

      <MoonIcon
        className={clsx(
          'absolute h-4 w-4 transition-all duration-300 md:h-5 md:w-5',
          theme === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
        )}
        strokeWidth={1.3}
      />
    </button>
  );
}
