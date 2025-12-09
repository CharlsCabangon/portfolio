import { renderHook, act } from '@testing-library/react';
import { useDevice } from '../useDevice';

describe('useDevice hook', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  test('returns device detection object', () => {
    const { result } = renderHook(() => useDevice());

    expect(result.current).toHaveProperty('breakpoint');
    expect(result.current).toHaveProperty('isMobile');
    expect(result.current).toHaveProperty('isTablet');
    expect(result.current).toHaveProperty('isDesktop');
  });

  test('detects mobile device (width < 640)', () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(false);
  });

  test('detects mobile device (sm breakpoint)', () => {
    window.innerWidth = 640;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(false);
  });

  test('detects tablet device (md breakpoint)', () => {
    window.innerWidth = 768;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  test('detects desktop device (lg breakpoint)', () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
  });

  test('detects desktop device (xl breakpoint)', () => {
    window.innerWidth = 1280;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
  });

  test('detects desktop device (2xl breakpoint)', () => {
    window.innerWidth = 1536;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
  });

  test('updates device detection on resize', () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(true);

    act(() => {
      window.innerWidth = 768;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(true);
  });

  test('returns correct breakpoint value', () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useDevice());

    expect(result.current.breakpoint).toBe('lg');
  });

  test('ensures only one device type is true at a time', () => {
    const breakpoints = [300, 640, 768, 1024, 1280, 1536];

    breakpoints.forEach((width) => {
      window.innerWidth = width;
      const { result } = renderHook(() => useDevice());

      const trueCount = [
        result.current.isMobile,
        result.current.isTablet,
        result.current.isDesktop,
      ].filter((v) => v === true).length;

      expect(trueCount).toBe(1);
    });
  });
});
