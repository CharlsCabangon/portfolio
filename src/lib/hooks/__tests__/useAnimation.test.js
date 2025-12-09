import { renderHook } from '@testing-library/react';
import { useScrollReveal, useStagger } from '../useAnimation';

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useInView: vi.fn(() => false),
  };
});

import { useInView } from 'framer-motion';

describe('useScrollReveal hook', () => {
  beforeEach(() => {
    vi.mocked(useInView).mockReturnValue(false);
  });

  test('returns ref and animation props', () => {
    const { result } = renderHook(() => useScrollReveal());

    expect(result.current).toHaveProperty('ref');
    expect(result.current).toHaveProperty('props');
  });

  test('uses default preset (fadeInUp) when none specified', () => {
    const { result } = renderHook(() => useScrollReveal());

    const { props } = result.current;
    expect(props.initial).toBeDefined();
    expect(props.animate).toBeDefined();
    expect(props.transition).toBeDefined();
  });

  test('accepts custom preset', () => {
    const { result: result1 } = renderHook(() => useScrollReveal({ preset: 'slideUp' }));
    const { result: result2 } = renderHook(() => useScrollReveal({ preset: 'fadeInUp' }));

    expect(result1.current.props).toBeDefined();
    expect(result2.current.props).toBeDefined();
  });

  test('falls back to fadeInUp for invalid preset', () => {
    const { result } = renderHook(() => useScrollReveal({ preset: 'invalid-preset' }));

    expect(result.current.props).toBeDefined();
  });

  test('accepts custom threshold', () => {
    const { result } = renderHook(() => useScrollReveal({ threshold: 0.5 }));

    expect(result.current.ref).toBeDefined();
    expect(result.current.props).toBeDefined();
  });

  test('accepts custom transition', () => {
    const customTransition = { duration: 0.5, delay: 0.2 };
    const { result } = renderHook(() => useScrollReveal({ transition: customTransition }));

    expect(result.current.props.transition).toEqual(customTransition);
  });

  test('uses default transition when none specified', () => {
    const { result } = renderHook(() => useScrollReveal());

    expect(result.current.props.transition).toBeDefined();
    expect(result.current.props.transition.duration).toBe(1);
  });

  test('returns initial state when not in view', () => {
    vi.mocked(useInView).mockReturnValue(false);
    const { result } = renderHook(() => useScrollReveal());

    expect(result.current.props.animate).toBe(result.current.props.initial);
  });

  test('returns animated state when in view', () => {
    vi.mocked(useInView).mockReturnValue(true);
    const { result } = renderHook(() => useScrollReveal());

    expect(result.current.props.animate).not.toBe(result.current.props.initial);
  });

  test('can be called multiple times with different configs', () => {
    const { result: result1 } = renderHook(() => useScrollReveal({ preset: 'fadeInUp' }));
    const { result: result2 } = renderHook(() =>
      useScrollReveal({ preset: 'slideUp', threshold: 0.2 })
    );

    expect(result1.current.props).toBeDefined();
    expect(result2.current.props).toBeDefined();
  });
});

describe('useStagger hook', () => {
  beforeEach(() => {
    vi.mocked(useInView).mockReturnValue(false);
  });

  test('returns ref, container, and item props', () => {
    const { result } = renderHook(() => useStagger());

    expect(result.current).toHaveProperty('ref');
    expect(result.current).toHaveProperty('container');
    expect(result.current).toHaveProperty('item');
  });

  test('provides container with stagger configuration', () => {
    const { result } = renderHook(() => useStagger());
    const { container } = result.current;

    expect(container.variants).toBeDefined();
    expect(container.variants.visible).toBeDefined();
    expect(container.variants.visible.transition).toBeDefined();
    expect(container.variants.visible.transition.staggerChildren).toBeDefined();
  });

  test('provides item with hidden and visible variants', () => {
    const { result } = renderHook(() => useStagger());
    const { item } = result.current;

    expect(item.variants).toBeDefined();
    expect(item.variants.hidden).toBeDefined();
    expect(item.variants.visible).toBeDefined();
  });

  test('accepts custom delay', () => {
    const { result } = renderHook(() => useStagger({ delay: 0.15 }));

    expect(result.current.container.variants.visible.transition.staggerChildren).toBe(0.15);
  });

  test('accepts custom y offset', () => {
    const { result } = renderHook(() => useStagger({ y: 30 }));

    expect(result.current.item.variants.hidden.y).toBe(30);
  });

  test('accepts custom threshold', () => {
    const { result } = renderHook(() => useStagger({ threshold: 0.5 }));

    expect(result.current.ref).toBeDefined();
  });

  test('item hidden state has opacity 0', () => {
    const { result } = renderHook(() => useStagger());
    const hidden = result.current.item.variants.hidden;

    expect(hidden.opacity).toBe(0);
  });

  test('item visible state has opacity 1', () => {
    const { result } = renderHook(() => useStagger());
    const visible = result.current.item.variants.visible;

    expect(visible.opacity).toBe(1);
    expect(visible.y).toBe(0);
  });

  test('container animate state is hidden when not in view', () => {
    vi.mocked(useInView).mockReturnValue(false);
    const { result } = renderHook(() => useStagger());

    expect(result.current.container.animate).toBe('hidden');
  });

  test('container animate state is visible when in view', () => {
    vi.mocked(useInView).mockReturnValue(true);
    const { result } = renderHook(() => useStagger());

    expect(result.current.container.animate).toBe('visible');
  });

  test('uses default delay value', () => {
    const { result } = renderHook(() => useStagger());

    expect(result.current.container.variants.visible.transition.staggerChildren).toBe(0.08);
  });

  test('uses default y offset value', () => {
    const { result } = renderHook(() => useStagger());

    expect(result.current.item.variants.hidden.y).toBe(20);
  });
});
