import { useTranslations } from "next-intl";
import type { Product } from "@/domain/product";
import OptimizedImage from "@/components/common/OptimizedImage";

export default function ProductCard({ product }: { product: Product }) {
  const t = useTranslations(`products.items.${product.slug}`);

  return (
    <div className="overflow-hidden rounded-sm border border-slate-200 bg-surface">
      <OptimizedImage
        src={product.image}
        alt={t("name")}
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
        className="h-80 w-full border border-slate-900/12 object-cover sm:h-56"
      />

      <div className="p-6">
        <h3 className="mb-2 font-serif text-[22px] text-slate-900">
          {t("name")}
        </h3>

        <p className="font-sans text-sm leading-[1.6] text-slate-600">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
