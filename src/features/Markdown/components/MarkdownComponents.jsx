export const markdownComponents = {
  h1: ({ children }) => <h1 className="text-foreground mt-4 mb-2 text-xl font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-foreground mt-4 mb-2 text-lg font-bold">{children}</h2>,
  h3: ({ children }) => (
    <h3 className="text-foreground mt-3 mb-2 text-base font-semibold">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-foreground mt-3 mb-2 text-sm font-semibold">{children}</h4>
  ),

  p: ({ children }) => <p className="text-foreground my-2 max-w-[80ch] font-light">{children}</p>,
  strong: ({ children }) => <strong className="text-foreground font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,

  ul: ({ children }) => (
    <ul className="marker:text-foreground my-2 ml-4 list-disc space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="marker:text-foreground my-2 ml-4 list-decimal space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="text-foreground font-light">{children}</li>,

  code: ({ children }) => (
    <code className="bg-foreground-disabled text-foreground font-code rounded px-1 py-0.5 text-xs">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="text-foreground my-3 overflow-x-auto rounded-md p-3">{children}</pre>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      className="text-foreground-secondary hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-border text-foreground-secondary my-3 border-l-2 pl-4 italic">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="border-border my-4" />,
};
