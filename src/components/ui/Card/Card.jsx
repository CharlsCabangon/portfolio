import PropTypes from 'prop-types';
import clsx from 'clsx';

import Tooltip from '@/components/ui/Tooltip';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { MEDIA_TYPES } from '@/lib/constants/media';
export default function Card({ project, index, onMouseEnter, onMouseLeave }) {
  const renderPreview = () => {
    if (!project.preview) return null;

    if (project.previewType === MEDIA_TYPES.VIDEO) {
      return (
        <video
          ref={project.videoRef}
          src={project.preview}
          className={clsx(
            'absolute inset-0 h-full w-full object-cover',
            'transition-opacity duration-300',
            project.isHovered ? 'opacity-100' : 'opacity-0'
          )}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      );
    }

    if (project.previewType === MEDIA_TYPES.IMAGE) {
      return (
        <img
          src={project.preview}
          alt={`${project.title} preview`}
          className={clsx(
            'absolute inset-0 h-full w-full object-cover',
            'transition-opacity duration-300',
            project.isHovered ? 'opacity-100' : 'opacity-0'
          )}
          loading="lazy"
        />
      );
    }

    return null;
  };

  return (
    <div
      className={clsx(
        'group relative cursor-pointer',
        'hover:bg-background-secondary border-border border-x',
        'transition-colors duration-200',
        'max-md:border-0 md:odd:border-l-transparent md:even:border-r-transparent'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} project`}
      ></a>

      {/* media container */}
      <div
        className={clsx(
          'relative p-2',
          'before:hidden after:hidden',
          'max-md:before:block max-md:after:block', // mobile: show lines on all cards

          'md:[.grid>div:nth-child(odd)_&]:before:block md:[.grid>div:nth-child(odd)_&]:after:block',
          'before:absolute before:top-0 before:right-0',
          'before:-left-[100vw] before:h-px before:w-[200vw]',
          'before:bg-border before:z-10',
          'after:absolute after:right-0 after:bottom-0',
          'after:-left-[100vw] after:h-px after:w-[200vw]',
          'after:bg-border after:z-10'
        )}
      >
        <div className="border-border relative aspect-[720/480] overflow-hidden rounded-lg border shadow-sm">
          <img
            src={project.thumbnail}
            alt={project.title}
            className={clsx(
              'absolute inset-0 h-full w-full object-cover',
              'transition-opacity duration-300',
              project.isHovered && project.preview ? 'opacity-0' : 'opacity-100'
            )}
            loading="lazy"
          />

          {renderPreview()}
        </div>
      </div>

      {/* text content */}
      <div
        className={clsx(
          'relative mt-2 p-2',
          'flex justify-between',
          'before:hidden after:hidden',
          'max-md:before:block max-md:after:block',

          'md:[.grid>div:nth-child(odd)_&]:before:block md:[.grid>div:nth-child(odd)_&]:after:block',
          'before:absolute before:top-0 before:right-0',
          'before:-left-[100vw] before:h-px before:w-[200vw]',
          'before:bg-border before:z-10',
          'after:absolute after:right-0 after:bottom-0',
          'after:-left-[100vw] after:h-px after:w-[200vw]',
          'after:bg-border after:z-10'
        )}
      >
        <div>
          <p className="text-lead">{project.title}</p>
          <p className="text-foreground-secondary mt-1 text-xs">{project.description}</p>
        </div>
        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20"
            aria-label={`Open the GitHub repository for ${project.title}`}
          >
            <Tooltip content="View repository">
              <ArrowTopRightOnSquareIcon className="text-foreground h-4 w-4" strokeWidth={1} />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    preview: PropTypes.string,
    previewType: PropTypes.oneOf(Object.values(MEDIA_TYPES).concat([null])),
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    isHovered: PropTypes.bool,
    videoRef: PropTypes.object,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
