import { getAssetUrl } from './getAssetUrl';
import { PATH, EXT } from '../constants';

export async function downloadFile(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch file: ${response.status}`);

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
  } catch (error) {
    console.error('Resume download failed:', error);
  }
}

export function downloadResume() {
  const url = getAssetUrl(PATH.ABOUT, 'charls-cabangon-resume', EXT.DOC);
  downloadFile(url, 'charls-cabangon-resume');
}
