export type ProductSlug =
  | "pumps"
  | "valves"
  | "panels"
  | "meters"
  | "accessories";

import type { StaticImageData } from "next/image";

/** Structural data only — name and description live in `messages/*.json`. */
export type Product = {
  slug: ProductSlug;
  image: StaticImageData;
};
