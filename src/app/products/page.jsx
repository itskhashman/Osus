'use client';

import { useLocale } from '@/lib/LocaleProvider';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const { t } = useLocale();

  return (
    <Section className="px-8 pb-[90px] pt-16">
      <div className="flex flex-col gap-4 mb-4">
        <PageTitle>{t.products.title}</PageTitle>

        <p className="mt-3 max-w-[560px] font-sans text-[15px] leading-[1.6] text-slate-600">
          {t.products.body}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.products.items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}