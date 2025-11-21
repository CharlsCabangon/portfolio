import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Card({ project, index }) {
  return (
    <div
      className={clsx(
        'group relative cursor-pointer',
        'border-border dark:border-border border-x',

        'transition-colors duration-200',
        'hover:bg-background-secondary dark:hover:bg-background-secondary',

        'max-md:border-0', // hide v borders on mobile
        'md:max-xl:odd:border-l-transparent md:max-xl:even:border-r-transparent', // 2 cols (md to xl): hide outer borders
        'xl:[&:nth-child(3n)]:border-r-transparent xl:[&:nth-child(3n+1)]:border-l-transparent' // 3 cols (xl+): hide outer borders
      )}
    >
      <a
        //href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} project`}
      >
        <span className="sr-only">View {project.title}</span>
      </a>

      {/* image container */}
      <div
        className={clsx(
          'relative p-2',
          'before:hidden after:hidden', // hide h lines by default
          'max-md:before:block max-md:after:block', // mobile: show lines on all cards

          // 2 cols (md-xl): show lines on FIRST card of each row (odd positioned)
          'md:max-xl:[.grid>div:nth-child(odd)_&]:before:block md:max-xl:[.grid>div:nth-child(odd)_&]:after:block',
          // 3 cols (xl+): show lines on FIRST card of each row (3n+1)
          'xl:[.grid>div:nth-child(3n+1)_&]:before:block xl:[.grid>div:nth-child(3n+1)_&]:after:block',

          'before:absolute before:top-0 before:right-0',
          'before:-left-[100vw] before:h-px before:w-[200vw]',
          'before:bg-border dark:before:bg-border before:z-10',
          'after:absolute after:right-0 after:bottom-0',
          'after:-left-[100vw] after:h-px after:w-[200vw]',
          'after:bg-border dark:after:bg-border after:z-10'
        )}
      >
        <div className="border-border dark:border-border relative aspect-[672/494] overflow-hidden rounded-md border shadow-sm">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* text content */}
      <div
        className={clsx(
          'relative mt-2 p-2',
          'before:hidden after:hidden', // hide h lines by default
          'max-md:before:block max-md:after:block', // mobile: show lines on all cards

          // 2 cols (md-xl): show lines on FIRST card of each row (odd positioned)
          'md:max-xl:odd:before:block md:max-xl:odd:after:block',
          // 3 cols (xl+): show lines on FIRST card of each row (3n+1)
          'xl:[.grid>div:nth-child(3n+1)_&]:before:block xl:[.grid>div:nth-child(3n+1)_&]:after:block',

          'before:absolute before:top-0 before:right-0 before:-left-[100vw]',
          'before:h-px before:w-[200vw]',
          'before:bg-border dark:before:bg-border before:z-10',
          'after:absolute after:right-0 after:bottom-0 after:-left-[100vw]',
          'after:h-px after:w-[200vw]',
          'after:bg-border dark:after:bg-border after:z-10'
        )}
      >
        <p className="text-foreground dark:text-foreground text-sm font-bold">{project.title}</p>
        <p className="text-foreground-secondary dark:text-foreground-secondary mt-1 text-xs">
          {project.description}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
