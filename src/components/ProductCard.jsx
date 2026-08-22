import { colors } from '@/lib/theme';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({
  product,
  imageHeight = 200,
  background = colors.white,
}) {
  return (
    <div
      className="overflow-hidden rounded-sm border border-slate-200"
      style={{ background }}
    >
      <PlaceholderImage label={product.name} height={imageHeight} />

      <div className="p-6">
        <h3 className="mb-2 font-serif text-[22px] text-slate-900">
          {product.name}
        </h3>

        <p className="font-sans text-sm leading-[1.6] text-slate-600">
          {product.desc}
        </p>
      </div>
    </div>
  );
}