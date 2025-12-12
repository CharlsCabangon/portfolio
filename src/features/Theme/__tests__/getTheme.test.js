import { getTheme } from '../utils/getTheme';
import { THEME } from '../utils/constants';

describe('getTheme utility', () => {
  test('returns stored theme when valid', () => {
    localStorage.setItem(THEME.KEY, THEME.DARK);
    expect(getTheme()).toBe(THEME.DARK);

    localStorage.setItem(THEME.KEY, THEME.LIGHT);
    expect(getTheme()).toBe(THEME.LIGHT);
  });

  test('returns null when no theme stored or invalid', () => {
    localStorage.clear();
    expect(getTheme()).toBeNull();

    localStorage.setItem(THEME.KEY, 'invalid-theme');
    expect(getTheme()).toBeNull();
  });
});
