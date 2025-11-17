import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function AppLayout({ children }) {
  return (
    <div
      className={clsx(
        'grid min-h-screen',
        'grid-cols-1',
        'sm:grid-cols-[40px_1fr_40px]',
        'lg:grid-cols-[60px_1fr_60px]',
        '2xl:grid-cols-[1fr_60px_minmax(1280px,2fr)_60px_1fr]'
      )}
    >
      <div class="hidden 2xl:block"></div>

      <div class="pattern-stripes border-border hidden border-x sm:block"></div>

      <main className="mt-2xl space-y-sm relative">{children}</main>

      <div class="pattern-stripes border-border hidden border-x sm:block"></div>

      <div class="hidden 2xl:block"></div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
