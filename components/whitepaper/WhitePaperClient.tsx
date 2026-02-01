// @/components/WhitePaperClient.tsx
"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/app/mdx-components";
import WhitePaper from "@/data/white-paper/white-paper.mdx";

export default function WhitePaperClient() {
  return (
    <MDXProvider components={useMDXComponents()}>
      <WhitePaper />
    </MDXProvider>
  );
}
