import PropTypes from 'prop-types';

import Border from './Border';
import Label from './Label';

export default function Heading({ children, level = 'h1', label }) {
  const Tag = level;

  return (
    <>
      <Label text={label} />
      <Border>
        <Tag>{children}</Tag>
      </Border>
    </>
  );
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  label: PropTypes.string,
};
