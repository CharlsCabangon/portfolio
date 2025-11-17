import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Border({ children, border = 'both', className }) {
  const borders = {
    both: 'before:block after:block',
    top: 'before:block after:hidden',
    bottom: 'before:hidden after:block',
    none: 'before:hidden after:hidden',
  };

  return (
    <div
      className={clsx(
        borders[border],
        'relative',
        'before:bg-border dark:before:bg-border before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw]',
        'after:bg-border dark:after:bg-border after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]',
        className
      )}
    >
      {children}
    </div>
  );
}

Border.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.oneOf(['top', 'bottom', 'both', 'none']),
  className: PropTypes.string,
};
