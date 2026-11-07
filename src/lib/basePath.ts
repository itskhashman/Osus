/** Site base path ("/Osus"); must match `basePath` in next.config.ts. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public/ file path for plain links (e.g. PDF downloads). */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
