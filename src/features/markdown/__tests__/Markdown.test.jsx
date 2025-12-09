import { screen, render } from '@testing-library/react';

import { Markdown } from '..';

vi.mock('../utils/mdLoader', () => ({
  getMarkdownContent: vi.fn((path, file) => {
    if (path === 'experiences' && file === '01-degree.md') {
      return {
        content: '# Degree\n\n Bachelor of Science in **Computer** Science',
        error: null,
      };
    }
    if (path === 'invalid') {
      return {
        content: null,
        error: "This content section isn't available right now.",
      };
    }
    return {
      content: null,
      error: 'This content is currently unavailable.',
    };
  }),
}));

describe('Markdown component', () => {
  test('renders markdown content when path and file are valid', () => {
    render(<Markdown path="experiences" file="01-degree.md" />);

    expect(screen.getByRole('heading', { level: 1, name: /degree/i })).toBeInTheDocument();
  });

  test('displays error message when path is invalid', () => {
    render(<Markdown path="invalid" file="any.md" />);

    expect(screen.getByText("This content section isn't available right now.")).toBeInTheDocument();
  });

  test('displays error message when file is not found', () => {
    render(<Markdown path="experiences" file="nonexistent.md" />);

    expect(screen.getByText('This content is currently unavailable.')).toBeInTheDocument();
  });

  test('renders markdown as HTML (converts ** to <strong>)', () => {
    render(<Markdown path="experiences" file="01-degree.md" />);

    const boldElement = screen.getByText(/computer/i);
    expect(boldElement).toBeInTheDocument();
    expect(boldElement.tagName).toBe('STRONG');
  });
});
