'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/LocaleProvider';
import { images } from '@/lib/content';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CtaBand from '@/components/CtaBand';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function HomePage() {
  const { t } = useLocale();

  return (
    <>
      <Hero />
      <StatsBar />

      {/* Company teaser */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div
          className="h-[400px] w-full rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${images.company})` }}
        />

        <div>
          <span className="font-sans text-[13px] font-bold tracking-[0.1em] text-amber-700">
            {t.company.kicker}
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-slate-900">
            {t.company.title}
          </h2>

          <p className="mt-4 font-sans text-base leading-relaxed text-slate-600">
            {t.company.body}
          </p>

          <Link
            href="/company"
            className="mt-5 inline-block font-sans text-sm font-bold text-amber-700"
          >
            {t.company.readMore} →
          </Link>
        </div>
      </section>

      {/* Products teaser */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-sans text-[13px] font-bold tracking-[0.1em] text-amber-700">
                {t.products.kicker}
              </span>

              <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900">
                {t.products.title}
              </h2>
            </div>

            <Link
              href="/products"
              className="font-sans text-sm font-bold text-amber-700"
            >
              {t.products.viewAll} →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.products.items.map((product) => (
              <div
                key={product.slug}
                className="overflow-hidden rounded-sm border border-slate-200"
              >
                <PlaceholderImage
                  label={product.name}
                  height={120}
                  diamondSize={12}
                  fontSize={12}
                />

                <div className="p-5">
                  <h3 className="mb-1.5 font-serif text-[19px] font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="font-sans text-[13px] leading-relaxed text-slate-500">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}