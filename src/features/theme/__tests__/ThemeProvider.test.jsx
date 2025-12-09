import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '../context/ThemeProvider';
import { useTheme } from '../hooks/useTheme';
import { THEME } from '../utils/constants';

function ThemeTestApp() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>Current: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

describe('ThemeProvider context', () => {
  beforeEach(() => {
    document.documentElement.className = '';
  });

  test('applies theme class to document root on mount', () => {
    render(
      <ThemeProvider>
        <ThemeTestApp />
      </ThemeProvider>
    );

    const classList = document.documentElement.classList;
    expect(classList.contains(THEME.DARK) || classList.contains(THEME.LIGHT)).toBe(true);
  });

  test('toggles theme when toggleTheme is called', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeTestApp />
      </ThemeProvider>
    );

    const toggle = screen.getByRole('button', { name: /toggle theme/i });
    const display = screen.getByText(/current:/i);

    const initialTheme = display.textContent.split(': ')[1];

    await user.click(toggle);

    const newTheme = screen.getByText(/current:/i).textContent.split(': ')[1];
    expect(newTheme).not.toBe(initialTheme);
    expect([THEME.DARK, THEME.LIGHT]).toContain(newTheme);
  });

  test('persists theme to localStorage on change', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeTestApp />
      </ThemeProvider>
    );

    const toggle = screen.getByRole('button', { name: /toggle theme/i });
    await user.click(toggle);

    const stored = localStorage.getItem(THEME.KEY);
    expect([THEME.DARK, THEME.LIGHT]).toContain(stored);
  });

  test('reads theme from localStorage on mount', () => {
    localStorage.setItem(THEME.KEY, THEME.DARK);

    render(
      <ThemeProvider>
        <ThemeTestApp />
      </ThemeProvider>
    );

    expect(screen.getByText(/current: dark/i)).toBeInTheDocument();
  });

  test('listens to system preference when no theme is stored', () => {
    localStorage.clear();

    const mockMatchMedia = vi.fn((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    window.matchMedia = mockMatchMedia;

    render(
      <ThemeProvider>
        <ThemeTestApp />
      </ThemeProvider>
    );

    const text = screen.getByText(/current:/i).textContent;
    expect(text).toContain(THEME.DARK);
  });
});
