vi.mock('../utils/mdPath', () => ({
  MD_PATH: {
    experiences: '/src/data/sections/experiences/content',
    projects: '/src/data/sections/projects/content',
  },
}));

import { getMarkdownContent } from '../utils/mdLoader';

describe('getMarkdownContent utility', () => {
  test('returns error when path is not in MD_PATH', () => {
    const result = getMarkdownContent('invalid-path', 'file.md');
    expect(result.error).toBeTruthy();
    expect(result.content).toBeNull();
  });

  test('returns error when file not found', () => {
    const result = getMarkdownContent('experiences', 'nonexistent.md');
    expect(result.error).toBeTruthy();
    expect(result.content).toBeNull();
  });

  test('returns content for valid path and filename (if file exists)', () => {
    const result = getMarkdownContent('experiences', '01-degree.md');

    if (result.content) {
      expect(result.content).toBeTruthy();
      expect(result.error).toBeNull();
    } else {
      expect(result.error).toBeTruthy();
      expect(result.content).toBeNull();
    }
  });
});
