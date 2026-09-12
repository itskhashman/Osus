import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import Section from "@/components/common/Section";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/fixture/products";

export default function ProductsView() {
  const t = useTranslations("products");

  return (
    <ScrollReveal>
      <Section className="px-8 pb-22.5 pt-16">
        <div className="mb-4 flex flex-col gap-4">
          <PageTitle>{t("title")}</PageTitle>

          <p className="mt-3 max-w-140 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
    </ScrollReveal>
  );
}
