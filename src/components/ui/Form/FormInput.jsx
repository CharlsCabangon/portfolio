import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  error,
  disabled = false,
  required = false,
  placeholder,
  inputRef,
  onChange,
  onBlur,
}) {
  const inputId = `input-${name}`;
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="text-foreground-secondary font-code mb-1.5 block text-sm font-normal"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={clsx(
          'px-xxs md:px-sm py-xs w-full border-b',
          'text-foreground placeholder:text-foreground-tertiary text-xs font-light md:text-sm',
          'transition-all duration-200',
          'focus:ring-border focus:ring-1',
          error ? 'border-error' : 'border-border',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <p id={errorId} className="text-error mt-1.5 text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'url', 'number']),
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};
