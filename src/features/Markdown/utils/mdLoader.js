import { MD_PATH } from './mdPath';

// pre-load all md files at BUILD TIME
const allMarkdownFiles = import.meta.glob(
  ['/src/data/sections/experiences/content/**/*.md', '/src/data/sections/about/**/*.md'],
  {
    query: '?raw',
    import: 'default',
    eager: true,
  }
);

export function getMarkdownContent(path, filename) {
  const basePath = MD_PATH[path];

  if (!basePath) {
    return {
      content: null,
      error: "This content section isn't available right now.",
    };
  }

  const filePath = `${basePath}/${filename}`;
  const content = allMarkdownFiles[filePath];

  if (!content) {
    return {
      content: null,
      error: 'This content is currently unavailable.',
    };
  }

  return { content, error: null };
}
