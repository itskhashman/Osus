import OptimizedImage from "@/components/common/OptimizedImage";

type BrandTileProps = {
  name: string;
  image?: string;
};

/** Shows a partner logo when one exists, and falls back to the brand name set in type. */
export default function BrandTile({ name, image }: BrandTileProps) {
  return (
    <div className="flex h-36 items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-white px-4 py-3">
      {image ? (
        <div className="relative h-full max-h-30 w-full">
          <OptimizedImage
            src={image}
            alt={name}
            fill
            placeholder="empty"
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      ) : (
        <span className="text-center font-sans text-sm font-bold tracking-[0.06em] text-slate-900">
          {name}
        </span>
      )}
    </div>
  );
}
