import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../context/ThemeProvider';

describe('ThemeToggle component', () => {
  test('renders toggle button with correct aria-label', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  test('calls toggleTheme when clicked', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });

    await user.click(button);
    expect(button).toBeInTheDocument();
  });

  test('accepts and applies className prop', () => {
    render(
      <ThemeProvider>
        <ThemeToggle className="custom-class" />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveClass('custom-class');
  });

  test('renders sun and moon icons', () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(2); // sun and moon
  });
});
