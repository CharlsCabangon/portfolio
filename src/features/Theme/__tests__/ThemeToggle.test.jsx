import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../context/ThemeProvider';
import { THEME } from '../utils/constants';

describe('ThemeToggle component', () => {
  const renderWithTheme = (ui = <ThemeToggle />) => render(<ThemeProvider>{ui}</ThemeProvider>);

  test('renders accessible toggle button', () => {
    renderWithTheme();

    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  test('toggles theme when clicked', async () => {
    const user = userEvent.setup();
    localStorage.setItem(THEME.KEY, THEME.DARK);

    renderWithTheme();

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));

    expect(localStorage.getItem(THEME.KEY)).toBe(THEME.LIGHT);
  });

  test('accepts custom className', () => {
    renderWithTheme(<ThemeToggle className="custom-class" />);

    expect(screen.getByRole('button', { name: /toggle theme/i })).toHaveClass('custom-class');
  });
});
