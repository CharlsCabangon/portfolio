import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { ICONIC_FONTS } from './helper/fonts';

export default function FontCycler({
  text,
  interval = 3000,
  fonts = ICONIC_FONTS,
  showFontName = false,
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(
    function () {
      const timer = setInterval(function () {
        setCurrentIndex(function (prev) {
          return (prev + 1) % fonts.length;
        });
      }, interval);

      return function () {
        clearInterval(timer);
      };
    },
    [interval, fonts.length]
  );

  const currentFont = fonts[currentIndex];

  return (
    <div
      className={clsx(
        'relative w-full', // Added w-full to ensure width
        className
      )}
    >
      {/* Main text container - explicit height */}
      <div className="relative h-16 w-full overflow-hidden sm:h-20 md:h-24 lg:h-20">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 1,
            }}
            style={{
              fontFamily: currentFont.family,
            }}
            className="absolute inset-0 flex w-full items-center text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {text}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Font name - only rendered if showFontName is true */}
      {showFontName && (
        <div className="mt-2 h-6 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`name-${currentIndex}`}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 1,
                delay: 0.05,
              }}
              className="text-foreground-disabled font-mono text-sm"
            >
              {currentFont.name}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

FontCycler.propTypes = {
  text: PropTypes.string.isRequired,
  interval: PropTypes.number,
  fonts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  showFontName: PropTypes.bool,
  className: PropTypes.string,
};
