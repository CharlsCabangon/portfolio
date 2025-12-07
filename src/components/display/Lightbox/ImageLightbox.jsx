import PropTypes from 'prop-types';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function ImageLightbox({
  isOpen,
  onClose,
  slides,
  index = 0,
  carousel = { finite: true },
  hideNavigation = false,
  ...props
}) {
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={index}
      slides={slides}
      carousel={carousel}
      render={{
        buttonPrev: hideNavigation || slides.length <= 1 ? () => null : undefined,
        buttonNext: hideNavigation || slides.length <= 1 ? () => null : undefined,
      }}
      {...props}
    />
  );
}

ImageLightbox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  index: PropTypes.number,
  carousel: PropTypes.object,
  hideNavigation: PropTypes.bool,
};
