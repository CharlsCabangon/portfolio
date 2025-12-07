export const MEDIA_TYPES = {
  VIDEO: 'video',
  IMAGE: 'image',
};

export const MEDIA_EXTENSIONS = {
  [MEDIA_TYPES.VIDEO]: ['mp4', 'webm', 'ogg', 'mov', 'avi'],
  [MEDIA_TYPES.IMAGE]: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg', 'bmp'],
};

export const DEFAULT_MEDIA_TYPE = MEDIA_TYPES.IMAGE;
