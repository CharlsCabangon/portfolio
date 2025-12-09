import { getAssetUrl } from '../getAssetUrl';

vi.mock('../../config/blob', () => ({
  BLOB_URL: 'https://blob.com',
}));

vi.mock('../../constants/assets', () => ({
  ROOT: 'assets',
}));

describe('getAssetUrl utility', () => {
  test('constructs URL with all parameters', () => {
    const result = getAssetUrl('images', 'hero', 'avif');
    expect(result).toBe('https://blob.com/assets/images/hero.avif');
  });

  test('handles different file extensions', () => {
    const extensions = ['avif', 'png', 'gif', 'webp', 'svg'];
    extensions.forEach((ext) => {
      const result = getAssetUrl('icons', 'logo', ext);
      expect(result).toContain(`.${ext}`);
    });
  });

  test('handles different paths', () => {
    const paths = ['images', 'videos', 'documents', 'icons'];
    paths.forEach((path) => {
      const result = getAssetUrl(path, 'file', 'avif');
      expect(result).toContain(`/${path}/`);
    });
  });

  test('includes root constant in URL', () => {
    const result = getAssetUrl('photos', 'sunset', 'png');
    expect(result).toContain('/assets/');
  });

  test('includes blob URL base in result', () => {
    const result = getAssetUrl('images', 'test', 'avif');
    expect(result).toContain('https://blob.com');
  });

  test('handles multiple consecutive calls', () => {
    const result1 = getAssetUrl('path1', 'file1', 'avif');
    const result2 = getAssetUrl('path2', 'file2', 'png');

    expect(result1).not.toBe(result2);
    expect(result1).toContain('path1');
    expect(result2).toContain('path2');
  });

  test('does not include trailing slashes', () => {
    const result = getAssetUrl('images', 'photo', 'avif');
    expect(result.endsWith('/')).toBe(false);
  });
});
