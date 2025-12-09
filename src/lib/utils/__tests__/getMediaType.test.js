import { getMediaType } from '../getMediaType';

vi.mock('../../constants/media', () => ({
  MEDIA_EXTENSIONS: {
    image: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg', 'bmp'],
    video: ['mp4', 'webm', 'ogg', 'mov', 'avi'],
  },
  DEFAULT_MEDIA_TYPE: 'image',
}));

describe('getMediaType utility', () => {
  test('returns null for null or undefined url', () => {
    expect(getMediaType(null)).toBeNull();
    expect(getMediaType(undefined)).toBeNull();
  });

  test('returns null for empty string', () => {
    expect(getMediaType('')).toBeNull();
  });

  test('identifies image types', () => {
    expect(getMediaType('photo.avif')).toBe('image');
    expect(getMediaType('image.png')).toBe('image');
    expect(getMediaType('animation.gif')).toBe('image');
    expect(getMediaType('graphic.svg')).toBe('image');
  });

  test('identifies video types', () => {
    expect(getMediaType('movie.mp4')).toBe('video');
    expect(getMediaType('clip.webm')).toBe('video');
    expect(getMediaType('footage.mov')).toBe('video');
  });

  test('handles uppercase extensions', () => {
    expect(getMediaType('PHOTO.JPG')).toBe('image');
    expect(getMediaType('VIDEO.MP4')).toBe('video');
  });

  test('handles mixed case extensions', () => {
    expect(getMediaType('Photo.JpG')).toBe('image');
    expect(getMediaType('Video.Mp4')).toBe('video');
  });

  test('handles full URLs', () => {
    expect(getMediaType('https://example.com/image.png')).toBe('image');
    expect(getMediaType('https://example.com/video.mp4')).toBe('video');
  });

  test('handles URLs with query parameters', () => {
    expect(getMediaType('https://example.com/image.jpg?size=large')).toBe('image');
  });

  test('returns default type for unknown extensions', () => {
    expect(getMediaType('file.xyz')).toBe('image');
    expect(getMediaType('unknown.abc')).toBe('image');
  });

  test('returns default type for URLs without extension', () => {
    expect(getMediaType('https://example.com/image')).toBe('image');
  });

  test('handles extensions with multiple dots', () => {
    expect(getMediaType('archive.tar.gz')).toBe('image');
  });

  test('is case-insensitive for extensions', () => {
    const urls = ['photo.JPG', 'photo.Jpg', 'photo.jpg', 'photo.jPg'];
    urls.forEach((url) => {
      expect(getMediaType(url)).toBe('image');
    });
  });

  test('handles relative paths', () => {
    expect(getMediaType('./assets/image.jpg')).toBe('image');
    expect(getMediaType('../media/video.mp4')).toBe('video');
  });

  test('handles data URIs and returns default', () => {
    expect(getMediaType('data:image/jpeg;base64,ABC...')).toBe('image');
  });
});
