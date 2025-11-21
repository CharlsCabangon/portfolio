import PropTypes from 'prop-types';
import clsx from 'clsx';
import Footer from '@/components/Footer';

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
      <div className="hidden 2xl:block"></div>

      <div className="pattern-stripes border-border hidden border-x sm:block"></div>

      <main>
        {children}
        <Footer />
      </main>

      <div className="pattern-stripes border-border hidden border-x sm:block"></div>

      <div className="hidden 2xl:block"></div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
