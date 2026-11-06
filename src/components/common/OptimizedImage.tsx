import ExportedImage, {
  type ExportedImageProps,
} from "next-image-export-optimizer";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const IS_DEV = process.env.NODE_ENV === "development";

export type OptimizedImageProps = Omit<ExportedImageProps, "basePath">;

/**
 * The only image component to use in this project.
 *
 * Wraps next-image-export-optimizer's ExportedImage, which serves responsive
 * sizes (same format as the source, no WebP) generated at build time —
 * `next-image-export-optimizer` runs after `next build`. It adds the site's
 * basePath, and in `next dev` — where the optimized files don't exist yet —
 * serves the original image directly.
 *
 * `src` is a static import, or a path under public/ without the basePath
 * (e.g. "/assets/succcesful_partners/partner_01.jpeg").
 */
export default function OptimizedImage({
  unoptimized,
  ...props
}: OptimizedImageProps) {
  return (
    <ExportedImage
      basePath={BASE_PATH}
      unoptimized={IS_DEV || unoptimized}
      {...props}
    />
  );
}
