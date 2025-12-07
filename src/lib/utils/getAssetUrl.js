import { BLOB_URL } from '../config/blob';
import { ROOT } from '../constants/assets';

export const getAssetUrl = (path, filename, ext) =>
  `${BLOB_URL}/${ROOT}/${path}/${filename}.${ext}`;
