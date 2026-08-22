import { assetPath } from '@/lib/assetPath';

export default function BrandTile({ name }) {
  return (
    <div className="flex h-21 items-center justify-center rounded-sm border border-slate-200 bg-white px-6">
      <img
        src={assetPath('/assets/osus-logo-clear.png')}
        alt={name}
        className="h-12 w-auto max-w-full object-contain"
      />
    </div>
  );
}