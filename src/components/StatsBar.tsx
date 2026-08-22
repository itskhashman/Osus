'use client';

import { useLocale } from '@/lib/LocaleProvider';

export default function StatsBar() {
  const { t } = useLocale();

  return (
    <section className="bg-slate-900 px-8 py-9">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {t.stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-[38px] font-extrabold text-amber-700">
              {stat.value}
            </div>

            <div className="mt-1.5 font-sans text-xs font-semibold tracking-wider text-slate-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}