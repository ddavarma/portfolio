import fs from "node:fs";
import path from "node:path";
import HeroSection from "./hero-section";

const PORTRAIT_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"] as const;

function findPortrait(): string | null {
  const dir = path.join(process.cwd(), "public", "hero");
  if (!fs.existsSync(dir)) return null;
  for (const ext of PORTRAIT_EXTENSIONS) {
    const filename = `portrait.${ext}`;
    if (fs.existsSync(path.join(dir, filename))) {
      return `/hero/${filename}`;
    }
  }
  return null;
}

export default function Hero() {
  return <HeroSection portrait={findPortrait()} />;
}
