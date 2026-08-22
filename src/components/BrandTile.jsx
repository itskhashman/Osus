import Diamond from './Diamond';

/** Supplier lettermark tile. Drop in a real logo <img> when licensed. */
export default function BrandTile({ name }) {
  return (
    <div className="flex h-[84px] items-center justify-center gap-2.5 rounded-sm border border-slate-200 bg-white px-3">
      <Diamond size={16} />

      <span className="font-serif text-xl font-extrabold tracking-[0.03em] text-slate-900">
        {name}
      </span>
    </div>
  );
}