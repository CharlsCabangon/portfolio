import { useBreakpoint } from './useBreakpoint';
export function useDevice() {
  const breakpoint = useBreakpoint();

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl',
  };
}
