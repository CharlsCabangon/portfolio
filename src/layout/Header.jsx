import { useState, useEffect, useRef } from 'react';

import clsx from 'clsx';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '@/components/icons/Logo';
import { ThemeToggle } from '@/features/Theme';
import { fadeInDown, slideDown, popIn, transition } from '@/styles/animation';
import { useStagger } from '@/lib/hooks';
import { NAV_LINKS, NAV_ID } from '@/data/layout/navData';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

export default function Header() {
  const [activeNav, setActiveNav] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const stagger = useStagger({ threshold: 0.7 });

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

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
        {...slideDown}
        viewport={{ once: true }}
        transition={{ ...transition.normal }}
        className={clsx(
          'fixed top-0 left-0 z-50',
          'h-10 md:h-12 lg:h-14',
          'flex w-full items-center justify-between',
          'bg-background border-border border-b',
          'md:gap-sm px-3 lg:px-4 2xl:pl-6'
        )}
      >
        <Link
          to={NAV_ID.HOME}
          spy={true}
          smooth={true}
          offset={-130}
          duration={600}
          delay={0}
          className="flex items-center"
        >
          <motion.button {...popIn} transition={{ ...transition.slow }}>
            <Logo variant="outline" className="text-foreground-tertiary h-11 md:h-14" />
          </motion.button>
        </Link>

        <div className="md:gap-sm flex h-full">
          <nav className="hidden items-stretch md:flex">
            <motion.ul
              ref={stagger.ref}
              {...stagger.container}
              className="flex h-full items-stretch"
            >
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
                >
                  <motion.button
                    {...stagger.item}
                    className={clsx(
                      'nav-desktop cursor-pointer',
                      activeNav === link.id && 'nav-active',
                      index === 0 && 'border-l',
                      index === NAV_LINKS.length - 1 && 'border-r',
                      index > 0 && index < NAV_LINKS.length - 1 && 'border-x'
                    )}
                  >
                    {link.label}
                  </motion.button>
                </Link>
              ))}
            </motion.ul>
          </nav>

          <motion.div {...popIn} transition={{ ...transition.slow }} className="my-auto">
            <ThemeToggle />
          </motion.div>

          <motion.button
            ref={toggleRef}
            {...popIn}
            transition={{ ...transition.slow }}
            onClick={toggleMenu}
            className="flex items-center rounded-lg md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <EllipsisVerticalIcon className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.header>

      {/* mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            {...fadeInDown}
            transition={{ ...transition.spring }}
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
