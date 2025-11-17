import PropTypes from 'prop-types';

export default function Label({ text }) {
  return (
    <div
      aria-hidden="true"
      className="font-code ml-sm text-foreground-disabled m-0 flex items-start text-xs font-light"
    >
      <span>{text}</span>
    </div>
  );
}

Label.propTypes = {
  text: PropTypes.string,
};
