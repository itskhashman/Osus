'use client';

import { useLocale } from '@/lib/LocaleProvider';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';

export default function CertificatesPage() {
  const { t } = useLocale();

  return (
    <Section>
      <PageTitle>{t.certificates.title}</PageTitle>

      <p className="mt-3 max-w-[560px] font-sans text-[15px] leading-[1.6] text-slate-600">
        {t.certificates.body}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.certificates.items.map((cert) => (
          <div
            key={cert.label}
            className="overflow-hidden rounded-sm border border-slate-200 bg-white"
          >
            <div
              className="h-[220px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${cert.img})` }}
            />

            <div className="p-4 text-center font-sans text-[13px] font-bold text-slate-900">
              {cert.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}