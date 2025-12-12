import { screen, render } from '@testing-library/react';

import { Markdown } from '..';

vi.mock('../utils/mdLoader', () => ({
  getMarkdownContent: vi.fn((path, file) => {
    if (path === 'experiences' && file === '01-degree.md') {
      return {
        content: '# Degree\n\nBachelor of Science in **Computer** Science',
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
  test('renders markdown content with formatting', () => {
    render(<Markdown path="experiences" file="01-degree.md" />);

    expect(screen.getByRole('heading', { level: 1, name: /degree/i })).toBeInTheDocument();

    const boldElement = screen.getByText('Computer');
    expect(boldElement.tagName).toBe('STRONG');
  });

  test('displays error when content cannot be loaded', () => {
    render(<Markdown path="invalid" file="lorem.md" />);
    expect(screen.getByText("This content section isn't available right now.")).toBeInTheDocument();

    render(<Markdown path="experiences" file="ipsum.md" />);
    expect(screen.getByText('This content is currently unavailable.')).toBeInTheDocument();
  });
});
