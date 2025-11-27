import { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

export default function Tooltip({
  children,
  content,
  position = 'bottom',
  delay = 200,
  className,
  disabled = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = () => {
    if (disabled) return;
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 -translate-y-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 translate-y-2',
    left: 'right-full top-1/2 -translate-y-1/2 -translate-x-2',
    right: 'left-full top-1/2 -translate-y-1/2 translate-x-2',
  };

  const arrow = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-surface',
    bottom:
      'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-surface',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-surface',
    right:
      'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-surface',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>

      <div
        role="tooltip"
        className={clsx(
          'pointer-events-none absolute z-50 whitespace-nowrap',
          'bg-surface rounded-md px-3 py-1.5',
          'text-surface-foreground text-xs font-medium',
          'shadow-lg',
          'transition-all duration-200',
          positions[position],
          isVisible ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0',
          className
        )}
      >
        {content}

        <span className={clsx('absolute h-0 w-0', 'border-4 border-solid', arrow[position])} />
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  delay: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
