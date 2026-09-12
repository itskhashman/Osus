export type ProductSlug =
  | "pumps"
  | "valves"
  | "panels"
  | "meters"
  | "accessories";

/** Structural data only — name and description live in `messages/*.json`. */
export type Product = {
  slug: ProductSlug;
  image: string;
};
