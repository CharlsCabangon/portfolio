const links = {
  email: { label: 'Email', href: 'charlsmercabangon@gmail.com' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/charls-cabangon-8126a3378/' },
  github: { label: 'GitHub', href: 'https://github.com/CharlsCabangon' },
  messenger: { label: 'Messenger', href: 'https://m.me/charlsmercabangon' },
  whatsapp: { label: 'WhatsApp', href: 'https://wa.me/09630392699' },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/charlscabangon/' },
};

export const getLink = (key) => links[key];

export const getLinks = (keys) => keys.map((key) => links[key]);
