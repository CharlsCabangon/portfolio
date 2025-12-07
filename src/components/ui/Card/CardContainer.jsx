import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import { getMediaType } from '@/lib/utils';
import { MEDIA_TYPES } from '@/lib/constants';

export default function CardContainer({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const previewType = getMediaType(project.preview);

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (previewType === MEDIA_TYPES.VIDEO && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.warn('Video autoplay failed:', err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (previewType === MEDIA_TYPES.VIDEO && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const projectData = {
    ...project,
    isHovered,
    videoRef,
    previewType,
  };

  return (
    <Card
      project={projectData}
      index={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

CardContainer.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    preview: PropTypes.string,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
