import { getTheme } from '../utils/getTheme';
import { THEME } from '../utils/constants';

describe('getTheme utility', () => {
  test('returns null when localStorage is empty', () => {
    const result = getTheme();
    expect(result).toBeNull();
  });

  test('returns stored DARK theme', () => {
    localStorage.setItem(THEME.KEY, THEME.DARK);
    const result = getTheme();
    expect(result).toBe(THEME.DARK);
  });

  test('returns stored LIGHT theme', () => {
    localStorage.setItem(THEME.KEY, THEME.LIGHT);
    const result = getTheme();
    expect(result).toBe(THEME.LIGHT);
  });

  test('returns null for invalid stored theme', () => {
    localStorage.setItem(THEME.KEY, 'invalid-theme');
    const result = getTheme();
    expect(result).toBeNull();
  });

  test('handles localStorage errors gracefully', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const result = getTheme();
    expect(result).toBeNull();

    spy.mockRestore();
  });
});
