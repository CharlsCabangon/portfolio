import { getAssetUrl } from '@/lib/utils/getAssetUrl';
import { PATH, EXT } from '@/lib/constants/assets';

export const projects = [
  {
    id: 'reaux',
    title: 'Reaux',
    description: 'A mock premium jewelry botique',
    thumbnail: getAssetUrl(PATH.PROJECTS.THUMBNAIL, 'reaux', EXT.IMAGE),
    preview: getAssetUrl(PATH.PROJECTS.PREVIEW, 'reaux', EXT.VIDEO),
    link: 'https://reaux.vercel.app/',
    github: 'https://github.com/CharlsCabangon/reaux',
  },
];
