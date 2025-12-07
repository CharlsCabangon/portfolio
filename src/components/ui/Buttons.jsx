import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getAriaLabel } from '@/lib/utils';

export function PrimaryBtn({ children, type = 'button', onClick, disabled = false, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={getAriaLabel(children)}
      className={clsx(
        'btn bg-surface text-surface-foreground',
        'transition-opacity hover:opacity-80 active:opacity-60',
        className
      )}
    >
      {children}
    </button>
  );
}

export function SecondaryBtn({ children, type = 'button', onClick, disabled = false, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={getAriaLabel(children)}
      className={clsx(
        'btn py-2.5',
        'ring-surface-hover focus-visible:ring-primary text-foreground ring ring-inset md:ring-2',
        'transition-opacity hover:opacity-70 active:opacity-40',
        className
      )}
    >
      {children}
    </button>
  );
}

export function GhostBtn({ children, type = 'button', onClick, disabled = false, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={getAriaLabel(children)}
      className={clsx(
        'relative inline-block cursor-pointer',
        'transition-opacity hover:opacity-60 active:opacity-30',
        'text-foreground-tertiary text-xs sm:text-sm',
        'after:bg-foreground-tertiary after:absolute after:bottom-0.5 after:-left-0 after:h-px after:w-full md:after:h-0.5',
        className
      )}
    >
      {children}
    </button>
  );
}

PrimaryBtn.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

SecondaryBtn.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

GhostBtn.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
