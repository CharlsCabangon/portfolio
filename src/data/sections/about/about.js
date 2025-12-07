import { getAssetUrl } from '@/lib/utils/getAssetUrl';
import { PATH, EXT } from '@/lib/constants/assets';

export const about = {
  id: 'charls-cabangon',
  title: 'Charls Cabangon',
  image: getAssetUrl(PATH.ABOUT, 'charls-cabangon', EXT.IMAGE),
  content: {
    path: 'about',
    filename: 'about.md',
  },
};

export const tools = [
  {
    title: 'tech stack',
    tools: [
      {
        id: 'javascript',
        name: 'Javascript',
        icon: getAssetUrl(PATH.TOOLS.TECH, 'javascript', EXT.ICON),
        link: '',
      },
      {
        id: 'react',
        name: 'React',
        icon: getAssetUrl(PATH.TOOLS.TECH, 'react', EXT.ICON),
        link: '',
      },
      {
        id: 'tailwind',
        name: 'Tailwind',
        icon: getAssetUrl(PATH.TOOLS.TECH, 'tailwind', EXT.ICON),
        link: '',
      },
      {
        id: 'git',
        name: 'Git',
        icon: getAssetUrl(PATH.TOOLS.TECH, 'git', EXT.ICON),
        link: '',
      },
      {
        id: 'vite',
        name: 'Vite',
        icon: getAssetUrl(PATH.TOOLS.TECH, 'vite', EXT.ICON),
        link: '',
      },
    ],
  },
  {
    title: 'design tools',
    tools: [
      {
        id: 'adobe-ps',
        name: 'Adobe Photoshop',
        icon: getAssetUrl(PATH.TOOLS.DESIGN, 'adobe-ps', EXT.ICON),
        link: '',
      },
      {
        id: 'adobe-ai',
        name: 'Adobe Illustrator',
        icon: getAssetUrl(PATH.TOOLS.DESIGN, 'adobe-ai', EXT.ICON),
        link: '',
      },
      {
        id: 'adobe-xd',
        name: 'Adobe Experience Design',
        icon: getAssetUrl(PATH.TOOLS.DESIGN, 'adobe-xd', EXT.ICON),
        link: '',
      },
      {
        id: 'figma',
        name: 'Figma',
        icon: getAssetUrl(PATH.TOOLS.DESIGN, 'figma', EXT.ICON),
        link: '',
      },
      {
        id: 'canva',
        name: 'Canva',
        icon: getAssetUrl(PATH.TOOLS.DESIGN, 'canva', EXT.ICON),
        link: '',
      },
    ],
  },
];
