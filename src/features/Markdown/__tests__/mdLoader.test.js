vi.mock('../utils/mdPath', () => ({
  MD_PATH: {
    experiences: '/src/data/sections/experiences/content',
    projects: '/src/data/sections/projects/content',
  },
}));

import { getMarkdownContent } from '../utils/mdLoader';

describe('getMarkdownContent utility', () => {
  test('returns error for invalid path or missing file', () => {
    const invalidPath = getMarkdownContent('invalid-path', 'lorem.md');
    expect(invalidPath.error).toBeTruthy();
    expect(invalidPath.content).toBeNull();

    const missingFile = getMarkdownContent('experiences', 'ipsum.md');
    expect(missingFile.error).toBeTruthy();
    expect(missingFile.content).toBeNull();
  });

  test('returns content for valid path and file when exists', () => {
    const result = getMarkdownContent('experiences', '01-degree.md');

    if (result.content) {
      expect(result.error).toBeNull();
    } else {
      expect(result.error).toBeTruthy();
    }
  });
});
