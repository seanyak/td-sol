import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";
import readingTime from "reading-time";
import { bundleMDX } from "mdx-bundler";
import { Frontmatter } from "@/types/frontmatter";

type FromPath = "blog" | "public" | "privacy-policy" | "terms-of-service";

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "data");

// ---------- utils ----------
const fileExists = (filePath: string): boolean => fs.existsSync(filePath);
const safeDecode = (s: string) => { try { return decodeURIComponent(s); } catch { return s; } };

/**
 * Resolve a content file for a slug, trying:
 *  - <slug>.mdx
 *  - <slug>.md
 *  - <slug>/index.mdx
 *  - <slug>/index.md
 */
function resolveContentPath(basePath: FromPath, slug: string): string {
  const base = path.join(DATA_PATH, basePath);
  const candidates = [
    path.join(base, `${slug}.mdx`),
    path.join(base, `${slug}.md`),
    path.join(base, slug, "index.mdx"),
    path.join(base, slug, "index.md"),
  ];

  for (const p of candidates) {
    if (fileExists(p)) return p;
  }
  throw new Error(
    `File not found for slug "${slug}" in "${basePath}". Tried:\n${candidates
      .map((c) => ` - ${c}`)
      .join("\n")}`
  );
}

/** Normalize Windows backslashes to URL slashes */
function toUrlPath(p: string) {
  return p.replace(/\\/g, "/");
}

// ---------- API: list frontmatter ----------
export const getAllFrontmatter = (fromPath: FromPath): Frontmatter[] => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.{mdx,md}`);

  return paths.map((filePath) => {
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    const slugFull = toUrlPath(
      filePath.replace(`${DATA_PATH}${path.sep}`, "").replace(/\.(mdx|md)$/, "")
    );

    return {
      ...(data as Frontmatter),
      slug: slugFull,
      readingTime: readingTime(content),
    } as Frontmatter;
  });
};

// ---------- API: fetch a single doc by slug (improved) ----------
export const getMdxBySlug = async (basePath: FromPath, slug: string) => {
  if (!slug) throw new Error("Invalid slug provided.");

  // Decode URL-encoded slugs so filenames with spaces/() work
  const normalized = slug
    .split("/")
    .map(safeDecode)
    .join("/");

  const filePath = resolveContentPath(basePath, normalized);

  try {
    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    const { code } = await bundleMDX({ source: content });

    return {
      frontmatter: {
        ...(data as Frontmatter),
        slug: normalized,
      } as Frontmatter,
      code,
      readingTime: readingTime(content),
      __filePath: filePath,
    };
  } catch (error) {
    throw new Error(
      `Error processing MDX file at ${filePath}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// ---------- enumerate slugs for generateStaticParams ----------
export async function getAllMdxSlugs(fromPath: FromPath): Promise<string[][]> {
  const base = path.join(DATA_PATH, fromPath);
  const files = glob.sync("**/*.{md,mdx}", { cwd: base, dot: false });

  return files
    .map((f) => toUrlPath(f))
    .map((f) => f.replace(/\/index\.(mdx|md)$/, "")) // "post/index.mdx" -> "post"
    .map((f) => f.replace(/\.(mdx|md)$/, ""))        // "post.mdx" -> "post"
    .filter((f) => f.length > 0)
    .map((f) => f.split("/"));
}
