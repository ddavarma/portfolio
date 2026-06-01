import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export type SiteImage = {
  src: string;
  alt: string;
  filename: string;
};

export function getImagesForSlug(
  category: string,
  slug: string,
): SiteImage[] {
  const dir = path.join(process.cwd(), "public", category, slug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((filename) => ({
      src: `/${category}/${slug}/${filename}`,
      alt: humanizeFilename(filename),
      filename,
    }));
}

export function getImagesForCategory(category: string): SiteImage[] {
  const dir = path.join(process.cwd(), "public", category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((filename) => ({
      src: `/${category}/${filename}`,
      alt: humanizeFilename(filename),
      filename,
    }));
}

export function findLogo(category: string, slug: string): string | null {
  const dir = path.join(process.cwd(), "public", category, slug);
  if (!fs.existsSync(dir)) return null;
  for (const ext of ["svg", "png", "jpg", "jpeg", "webp"]) {
    const filename = `logo.${ext}`;
    if (fs.existsSync(path.join(dir, filename))) {
      return `/${category}/${slug}/${filename}`;
    }
  }
  return null;
}

function humanizeFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_]?/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}
