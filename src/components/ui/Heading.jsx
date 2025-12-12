import { memo } from 'react';
import PropTypes from 'prop-types';

import { Border, Label } from '@/components/ui/';
import { useTheme } from '@/features/Theme';

function Heading({ children, level = 'h1', position, hasLabel = true }) {
  const Tag = level;
  const { isDark } = useTheme();

  const labelSize = {
    h1: 'text-7xl',
    h2: 'text-6xl',
    h3: 'text-5xl',
    h4: 'text-4xl',
    h5: 'text-3xl',
    h6: 'text-2xl',
  };

  const labelColor = isDark ? 'text-white' : 'text-black';

  return (
    <div>
      {hasLabel && (
        <Label position={position}>
          {`${labelSize[level]} ${labelColor} tracking-tighter text-balance`}
        </Label>
      )}
      <Border position={position}>
        <Tag>{children}</Tag>
      </Border>
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  position: PropTypes.oneOf(['left', 'center', 'right']),
  hasLabel: PropTypes.bool,
};

export default memo(Heading);
