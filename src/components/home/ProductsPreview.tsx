import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products } from "@/fixture/products";
import { assetPath } from "@/lib/assetPath";

export default function ProductsPreview() {
  const t = useTranslations();

  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-sans text-[13px] font-bold tracking-widest text-amber-700">
              {t("products.kicker")}
            </span>

            <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900">
              {t("products.title")}
            </h2>
          </div>

          <Link
            href="/products"
            className="font-sans text-sm font-bold text-amber-700"
          >
            {t("common.viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.slug}
              className="overflow-hidden rounded-sm border border-slate-200"
            >
              <img
                src={assetPath(product.image)}
                alt={t(`products.items.${product.slug}.name`)}
                className="h-20 w-full rounded-sm border border-slate-900/12 bg-cover bg-center sm:h-40"
              />

              <div className="p-5">
                <h3 className="mb-1.5 font-serif text-[19px] font-bold text-slate-900">
                  {t(`products.items.${product.slug}.name`)}
                </h3>

                <p className="font-sans text-[13px] leading-relaxed text-slate-500">
                  {t(`products.items.${product.slug}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
