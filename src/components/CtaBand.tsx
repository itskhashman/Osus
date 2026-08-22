'use client';

import { useLocale } from '@/lib/LocaleProvider';
import Button from './Button';

export default function CtaBand() {
  const { t } = useLocale();

  return (
    <section className="bg-amber-700 px-8 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <h2 className="font-serif text-[30px] text-slate-900">
          {t.cta.title}
        </h2>

        <Button href="/contact" variant="dark">
          {t.cta.button}
        </Button>
      </div>
    </section>
  );
}