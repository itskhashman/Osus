'use client';

import { useLocale } from '@/lib/LocaleProvider';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import BrandTile from '@/components/BrandTile';

export default function PartnersPage() {
  const { t } = useLocale();

  return (
    <Section>
      <div className="mb-11 text-center">
        <PageTitle align="center">{t.partners.title}</PageTitle>
      </div>

      {t.partners.groups.map((group) => (
        <div key={group.category} className="mb-9">
          <h3 className="mb-4 font-serif text-xl text-slate-900">
            {group.category}
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {group.brands.map((brand, i) => (
              <BrandTile
                key={`${group.category}-${brand}-${i}`}
                name={brand}
              />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}