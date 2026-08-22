'use client';

import { useLocale } from '@/lib/LocaleProvider';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ServiceColumn from '@/components/ServiceColumn';

export default function ServicesPage() {
  const { t } = useLocale();

  return (
    <Section>
      <div className="mb-14">
        <PageTitle>{t.services.title}</PageTitle>
      </div>

      <div className="grid grid-cols-1 gap-11 md:grid-cols-3">
        {t.services.columns.map((column) => (
          <ServiceColumn
            key={column.heading}
            heading={column.heading}
            items={column.items}
          />
        ))}
      </div>
    </Section>
  );
}