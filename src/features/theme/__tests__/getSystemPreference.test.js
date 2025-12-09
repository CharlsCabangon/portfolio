import { getSystemPreference } from '../utils/getSystemPreference';
import { THEME } from '../utils/constants';

describe('getSystemPreference utility', () => {
  let originalMatchMedia;

  const mockMatchMedia = (prefersDark = false) => {
    window.matchMedia = vi.fn((query) => ({
      matches: prefersDark && query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  };

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  test('returns LIGHT when matchMedia not available', () => {
    delete window.matchMedia;
    expect(getSystemPreference()).toBe(THEME.LIGHT);
  });

  test('returns DARK when system prefers dark', () => {
    mockMatchMedia(true);
    expect(getSystemPreference()).toBe(THEME.DARK);
  });

  test('returns LIGHT when system prefers light', () => {
    mockMatchMedia(false);
    expect(getSystemPreference()).toBe(THEME.LIGHT);
  });
});
