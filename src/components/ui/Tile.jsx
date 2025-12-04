import { useState } from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function Tile({ children, src, title, caption, gridClass, onClick, className }) {
  const [isHovered, setIsHovered] = useState(false);

  if (children) {
    return (
      <div
        className={clsx(
          'relative overflow-hidden',
          'rounded-lg border shadow-md',
          'border-border bg-background',
          gridClass,
          className
        )}
      >
        {children}
      </div>
    );
  }

  if (!src) {
    console.warn('Tile: src prop is required when children is not provided');
    return null;
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        'group relative overflow-hidden',
        'rounded-lg border shadow-md',
        'border-border bg-background',
        'cursor-pointer transition-all duration-200',
        gridClass,
        className
      )}
      aria-label={`View ${title}`}
    >
      <img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {onClick && (
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={clsx(
                  'absolute inset-0',
                  'bg-gradient-to-t from-black/75 via-black/45 via-40% to-black/30'
                )}
              />

              {caption && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-md absolute inset-x-0 bottom-0 z-10"
                >
                  <p
                    className={clsx(
                      'border-l-2 border-white pl-3',
                      'font-code text-left text-xs font-light text-white'
                    )}
                  >
                    {caption}
                  </p>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      )}
    </button>
  );
}

Tile.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  gridClass: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
