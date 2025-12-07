import { useState } from 'react';

import clsx from 'clsx';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '@/components/icons/Logo';
import { ThemeToggle } from '@/features/Theme';
import { NAV_LINKS } from '@/data/layout/navData';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

export default function Header() {
  const [activeNav, setActiveNav] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveNav(to);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={clsx(
          'fixed top-0 left-0 z-50',
          'h-10 md:h-12 lg:h-14',
          'flex w-full items-center justify-between',
          'bg-background border-border border-b',
          'md:gap-sm px-3 lg:px-4 2xl:pl-6'
        )}
      >
        <Logo variant="outline" className="text-foreground-tertiary h-11 md:h-14" />

        <div className="md:gap-sm flex h-full">
          <nav className="hidden items-stretch md:flex">
            <ul className="flex h-full items-stretch">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={600}
                  delay={0}
                  onSetActive={handleSetActive}
                  onClick={() => setActiveNav(link.id)}
                  className={clsx(
                    'nav-desktop cursor-pointer',
                    activeNav === link.id && 'nav-active',
                    index === 0 && 'border-l',
                    index === NAV_LINKS.length - 1 && 'border-r',
                    index > 0 && index < NAV_LINKS.length - 1 && 'border-x'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </nav>

          <div className="my-auto">
            <ThemeToggle />
          </div>

          <button
            onClick={toggleMenu}
            className="flex items-center rounded-lg md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <EllipsisVerticalIcon className="h-4 w-4" />
          </button>
        </div>
      </motion.header>

      {/* mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={clsx(
              'fixed top-11 right-4 z-50',
              'bg-background border shadow-md',
              'overflow-hidden',
              'md:hidden'
            )}
          >
            <ul>
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={700}
                  delay={0}
                  onSetActive={handleSetActive}
                  onClick={() => {
                    setActiveNav(link.id);
                    closeMenu();
                  }}
                  className={clsx(
                    'nav-mobile cursor-pointer',
                    activeNav === link.id && 'nav-active',
                    index < NAV_LINKS.length - 1 && 'border-b'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
