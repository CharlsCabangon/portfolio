import { MEDIA_EXTENSIONS, DEFAULT_MEDIA_TYPE } from '../constants/media';

export function getMediaType(url) {
  if (!url) return null;

  const extension = url.split('.').pop()?.toLowerCase();
  if (!extension) return DEFAULT_MEDIA_TYPE;

  for (const [type, extensions] of Object.entries(MEDIA_EXTENSIONS)) {
    if (extensions.includes(extension)) {
      return type;
    }
  }

  return DEFAULT_MEDIA_TYPE;
}
