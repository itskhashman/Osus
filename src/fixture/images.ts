import type { StaticImageData } from "next/image";
import hero from "@/assets/hero.png";
import logo from "@/assets/osus-logo-clear.png";
import logoLight from "@/assets/osus-logo-light.png";
import pumps from "@/assets/products/pumps.png";

/**
 * Bundled images, statically imported so the image component knows their
 * size (no layout shift) and they get optimized at build time.
 */
export const localImages = {
  hero,
  company: pumps,
  logo,
  logoLight,
} satisfies Record<string, StaticImageData>;

/** Remote placeholder imagery, used until brand photography is available. */
export const remoteImages = {
  company:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=650&h=720&fit=crop",
  contact:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&h=350&fit=crop",
};
