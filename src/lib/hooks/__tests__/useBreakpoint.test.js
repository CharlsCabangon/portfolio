import { renderHook, act } from '@testing-library/react';
import { useBreakpoint } from '../useBreakpoint';

describe('useBreakpoint hook', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  test('returns initial breakpoint based on window width', () => {
    window.innerWidth = 768;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('md');
  });

  test('returns mobile for width < 640', () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('mobile');
  });

  test('returns sm for width 640-767', () => {
    window.innerWidth = 640;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('sm');
  });

  test('returns md for width 768-1023', () => {
    window.innerWidth = 768;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('md');
  });

  test('returns lg for width 1024-1279', () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('lg');
  });

  test('returns xl for width 1280-1535', () => {
    window.innerWidth = 1280;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('xl');
  });

  test('returns 2xl for width >= 1536', () => {
    window.innerWidth = 1536;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('2xl');
  });

  test('updates breakpoint on window resize', () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('mobile');

    act(() => {
      window.innerWidth = 1024;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('lg');
  });

  test('handles multiple resize events', () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe('mobile');

    act(() => {
      window.innerWidth = 768;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current).toBe('md');

    act(() => {
      window.innerWidth = 1280;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current).toBe('xl');
  });

  test('cleans up event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useBreakpoint());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });

  test('returns consistent breakpoint for exact boundary values', () => {
    const testCases = [
      [639, 'mobile'],
      [640, 'sm'],
      [767, 'sm'],
      [768, 'md'],
      [1023, 'md'],
      [1024, 'lg'],
      [1279, 'lg'],
      [1280, 'xl'],
      [1535, 'xl'],
      [1536, '2xl'],
    ];

    testCases.forEach(([width, expected]) => {
      window.innerWidth = width;
      const { result } = renderHook(() => useBreakpoint());
      expect(result.current).toBe(expected);
    });
  });
});
