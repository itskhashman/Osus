'use client';

import { useLocale } from '@/lib/LocaleProvider';
import { images } from '@/lib/content';
import PageTitle from '@/components/PageTitle';

export default function CompanyPage() {
  const { t } = useLocale();

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 pb-24 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div
        className="h-[420px] w-full rounded-sm bg-cover bg-center"
        style={{ backgroundImage: `url(${images.company})` }}
      />

      <div>
        <PageTitle size={44}>{t.company.title}</PageTitle>

        <p className="mt-5 font-sans text-base leading-[1.7] text-slate-600">
          {t.company.body}
        </p>

        <blockquote className="mt-7 border-s-amber-700 bg-white px-7 py-6">
          <p className="font-sans text-base font-medium italic leading-[1.6] text-slate-900">
            &ldquo;{t.company.quote}&rdquo;
          </p>

          <p className="mt-3 font-sans text-[13px] font-bold tracking-[0.03em] text-slate-500">
            {t.company.quoteAuthor}
          </p>
        </blockquote>
      </div>
    </section>
  );
}