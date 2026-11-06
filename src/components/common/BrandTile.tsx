import LoadingImage from "@/components/common/LoadingImage";

type BrandTileProps = {
  name: string;
  image?: string;
};

/** Shows a partner logo when one exists, and falls back to the brand name set in type. */
export default function BrandTile({ name, image }: BrandTileProps) {
  return (
    <div className="flex h-36 items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-white px-4 py-3">
      {image ? (
        <LoadingImage
          src={image}
          alt={name}
          indicator="pulse"
          placeholder="empty"
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
          className="h-full max-h-30 w-full"
          imageClassName="object-contain"
        />
      ) : (
        <span className="text-center font-sans text-sm font-bold tracking-[0.06em] text-slate-900">
          {name}
        </span>
      )}
    </div>
  );
}
