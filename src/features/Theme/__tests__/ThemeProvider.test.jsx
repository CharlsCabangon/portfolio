import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '../context/ThemeProvider';
import { useTheme } from '../hooks/useTheme';
import { THEME } from '../utils/constants';

function ThemeTestApp() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="current-theme">current: {theme}</p>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}

describe('ThemeProvider context', () => {
  const renderWithTheme = () =>
    render(
      <ThemeProvider>
        <ThemeTestApp />
      </ThemeProvider>
    );

  beforeEach(() => {
    document.documentElement.className = '';
  });

  test('provides default theme based on system preference', () => {
    window.matchMedia = vi.fn((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    renderWithTheme();

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  test('loads saved theme from localStorage', () => {
    localStorage.setItem(THEME.KEY, THEME.LIGHT);

    renderWithTheme();

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
  });

  test('toggles between dark and light themes', async () => {
    const user = userEvent.setup();
    localStorage.setItem(THEME.KEY, THEME.DARK);

    renderWithTheme();

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(localStorage.getItem(THEME.KEY)).toBe(THEME.LIGHT);
  });
});
