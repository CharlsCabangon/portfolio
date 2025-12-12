import { memo } from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';

import { markdownComponents } from './MarkdownComponents';
import { getMarkdownContent } from '../utils/mdLoader';

function Markdown({ path, file }) {
  const { content, error } = getMarkdownContent(path, file);

  if (error) {
    return <p className="text-foreground-tertiary text-sm">{error}</p>;
  }

  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}

Markdown.propTypes = {
  file: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired,
};

export default memo(Markdown);
