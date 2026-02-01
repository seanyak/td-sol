// @/app/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <div className="flex flex-col gap-12 p-4 w-full bg-black text-white">{children}</div>
    ),

    // Headings
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-medium">{children}</h4>,

    // Text
    p: ({ children }) => <p className="text-lg leading-relaxed">{children}</p>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,

    // Lists
    ol: ({ children }) => <ol className="list-inside list-decimal pl-5">{children}</ol>,
    ul: ({ children }) => <ul className="ml-10 list-disc pl-5">{children}</ul>,

    // Inline code
    code: ({ children }) => (
      <code className="rounded-sm bg-muted p-1 text-[14px] font-mono shadow-sm">
        {children}
      </code>
    ),

    // Images
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt={props.alt || 'MDX Image'}
      />
    ),

    ...components,
  };
}
