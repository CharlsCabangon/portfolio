import { getAriaLabel } from '../getAriaLabel';

describe('getAriaLabel utility', () => {
  test('returns string when children is a string', () => {
    const result = getAriaLabel('click me');
    expect(result).toBe('click me');
  });

  test('returns empty string for null children', () => {
    const result = getAriaLabel(null);
    expect(result).toBe('');
  });

  test('returns empty string for undefined children', () => {
    const result = getAriaLabel(undefined);
    expect(result).toBe('');
  });

  test('returns first string from array of children', () => {
    const children = ['click me', 123, null];
    const result = getAriaLabel(children);
    expect(result).toBe('click me');
  });

  test('skips non-string values to find string in array', () => {
    const children = [123, null, 'found it'];
    const result = getAriaLabel(children);
    expect(result).toBe('found it');
  });

  test('returns empty string when array has no strings', () => {
    const children = [123, null, undefined];
    const result = getAriaLabel(children);
    expect(result).toBe('');
  });

  test('returns empty string for empty array', () => {
    const result = getAriaLabel([]);
    expect(result).toBe('');
  });

  test('returns empty string for object children', () => {
    const result = getAriaLabel({ text: 'hello' });
    expect(result).toBe('');
  });

  test('returns empty string for number', () => {
    const result = getAriaLabel(123);
    expect(result).toBe('');
  });

  test('returns empty string for boolean', () => {
    const result = getAriaLabel(true);
    expect(result).toBe('');
  });

  test('handles mixed array with JSX elements and strings', () => {
    const children = [{ type: 'div' }, 'button text', { type: 'span' }];
    const result = getAriaLabel(children);
    expect(result).toBe('button text');
  });

  test('returns first string regardless of position in array', () => {
    const children = [null, null, 'found'];
    const result = getAriaLabel(children);
    expect(result).toBe('found');
  });
});
