import { getAssetUrl } from '@/lib/utils/getAssetUrl';
import { PATH, EXT } from '@/lib/constants/assets';

const designs = [
  {
    id: 'design-the-garcian',
    title: 'The Garcian logo',
    image: getAssetUrl(PATH.DESIGNS, 'design-the-garcian', EXT.IMAGE),
    caption:
      'The official logo of The Garcian, the school publication of Garcia College of Technology, transforms the G into a shooting star, embodying the college’s spirit as bearers of excellence.',
    gridClass: 'col-start-1 row-span-3 row-start-1',
    className: 'rounded-tr-none rounded-bl-none',
  },
  {
    id: 'design-kultura-shirt',
    title: 'Kultura shirt design',
    image: getAssetUrl(PATH.DESIGNS, 'design-kultura-shirt', EXT.IMAGE),
    caption:
      'Shirt design for the West Visayas Regional Festival of Talents 2025, showcasing the vibrant folk dance culture of the Philippines.',
    gridClass: 'col-start-2 row-span-2 row-start-3',
  },
  {
    id: 'design-sd',
    title: 'S&D wedding logo',
    image: getAssetUrl(PATH.DESIGNS, 'design-sd', EXT.IMAGE),
    caption:
      'A simple, elegant wedding logo featuring the letters S and D intertwined with a heart, symbolizing love and unity.',
    gridClass: 'col-start-2 row-span-2 row-start-1',
    className: 'rounded-t-none',
  },
  {
    id: 'design-trainy',
    title: 'Trainy fitness app',
    image: getAssetUrl(PATH.DESIGNS, 'design-trainy', EXT.IMAGE),
    caption:
      'A brand design for Trainy, an AI-powered fitness app. The logo features a robot head shaped like a dumbbell, blending tech and strength in one bold mark.',
    gridClass: 'col-start-3 row-span-3 row-start-1',
    className: 'rounded-tl-none rounded-br-none',
  },
  {
    id: 'design-jay-ay-logo',
    title: 'Jay-Ay Villanueva logo',
    image: getAssetUrl(PATH.DESIGNS, 'design-jay-ay-logo', EXT.IMAGE),
    caption:
      'A graceful, sleek logo for a makeup artist, turning his initials JI into an infinity to symbolize endless beauty.',
    gridClass: 'col-start-1 row-start-4',
    className: 'rounded-l-none',
  },
  {
    id: 'design-ite-day',
    title: 'ITE Day 2025 logo',
    image: getAssetUrl(PATH.DESIGNS, 'design-ite-day', EXT.IMAGE),
    caption:
      'A vibrant, retro-inspired pixel wordmark celebrating the 10th ITE Day with a nod to classic gaming aesthetics.',
    gridClass: 'col-span-2 col-start-1 row-span-2 row-start-5',
    className: 'rounded-tl-none rounded-br-none',
  },
  {
    id: 'design-dept-shirt',
    title: 'GCT ITE Departmental Shirt for AY 2024-2025',
    image: getAssetUrl(PATH.DESIGNS, 'design-dept-shirt', EXT.IMAGE),
    caption:
      'Retro-inspired shirt design featuring an arcade machine that erupts with a rocket and pixel aliens, capturing the thrill of technology breaking boundaries.',
    gridClass: 'col-start-3 row-span-3 row-start-4',
    className: 'rounded-bl-none rounded-tr-none',
  },
];

export function getDesign(id) {
  return designs.find((item) => item.id === id);
}

export function getAllDesigns() {
  return designs;
}

export function getDesignsForLightbox() {
  return designs.map((design) => ({
    src: design.image,
    alt: design.title,
    title: design.title,
  }));
}
