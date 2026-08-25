"use client";

import { useLocale } from "@/lib/LocaleProvider";
import Section from "@/components/Section";
import PageTitle from "@/components/PageTitle";
import ServiceColumn from "@/components/ServiceColumn";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  const { t } = useLocale();

  return (
    <ScrollReveal>
      <Section>
        <div className="flex flex-col items-center gap-4 mb-4">
          <PageTitle>{t.services.title}</PageTitle>

          <p className="mt-3 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t.partners.body}
          </p>
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
    </ScrollReveal>
  );
}
