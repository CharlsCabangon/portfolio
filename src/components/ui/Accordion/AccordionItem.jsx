import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { TimelineNode } from '@/components/display';
import { Markdown } from '@/features/Markdown';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function AccordionItem({ item, isFirst, isLast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, item.filename]);

  return (
    <div className="bg-background flex">
      <TimelineNode isActive={item.isActive} isFirst={isFirst} />

      <div
        className={clsx('flex w-full flex-col', 'border-border border-l', !isLast && 'border-b')}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            'flex w-full items-center justify-between',
            'py-sm px-md cursor-pointer',
            'text-left transition-colors duration-300',
            'hover:bg-background-secondary'
          )}
          aria-expanded={isOpen}
        >
          <div className="flex flex-col items-start gap-1">
            <h6 className="text-foreground mb-1">{item.title}</h6>
            <span className="font-body text-foreground-secondary text-xs">{item.company}</span>
            <span className="font-body text-foreground-secondary text-xs">{item.date}</span>
          </div>
          <ChevronDownIcon
            className={clsx(
              'text-foreground-secondary h-5 w-5',
              'transition-transform duration-300 ease-out',
              isOpen && 'rotate-180'
            )}
            strokeWidth={1.5}
          />
        </button>

        <div
          style={{
            maxHeight: isOpen ? `${height}px` : '0px',
          }}
          className="overflow-hidden transition-all duration-300 ease-out"
        >
          <div ref={contentRef} className="pt-xs pb-md px-md md:px-2xl">
            <div className="text-foreground text-sm">
              <Markdown path={item.path} file={item.filename} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    date: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};
