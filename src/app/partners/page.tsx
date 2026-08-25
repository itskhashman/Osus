"use client";

import { useLocale } from "@/lib/LocaleProvider";
import Section from "@/components/Section";
import PageTitle from "@/components/PageTitle";
import BrandTile, {
  getPartnerImage,
  partnerImageFiles,
} from "@/components/BrandTile";
import { assetPath } from "@/lib/assetPath";

export default function PartnersPage() {
  const { t } = useLocale();

  return (
    <Section>
      <div className="flex flex-col items-center gap-4 mb-4">
        <PageTitle align="center">{t.partners.title}</PageTitle>

        <p className="mt-3 font-sans text-[15px] leading-[1.6] text-slate-600">
          {t.partners.body}
        </p>
      </div>

      {t.partners.groups.map((group) => (
        <div key={group.category} className="mb-9">
          <h3 className="mb-4 font-serif text-xl text-slate-900">
            {group.category}
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partnerImageFiles.map((image) => (
              <img
                src={assetPath(`/assets/${image}`)}
                className="h-full max-h-16 w-auto max-w-full object-contain"
              />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
