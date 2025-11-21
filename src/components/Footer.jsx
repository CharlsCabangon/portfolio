import clsx from 'clsx';

export default function Footer() {
  return (
    <footer
      className={clsx(
        'flex items-center justify-center',
        'p-sm h-auto w-full',
        'border-border border-t'
      )}
    >
      <p>&#xa9; {new Date().getFullYear()} Charls Cabangon</p>
    </footer>
  );
}
