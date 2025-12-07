export function getAriaLabel(children) {
  // for my buttons
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.find((c) => typeof c === 'string') || '';
  return '';
}
