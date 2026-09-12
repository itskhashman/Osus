import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import Section from "@/components/common/Section";
import PartnerGroupSection from "@/components/partners/PartnerGroupSection";
import PartnerLogoWall from "@/components/partners/PartnerLogoWall";
import { partnerGroups } from "@/fixture/partners";

export default function PartnersView() {
  const t = useTranslations("partners");

  return (
    <ScrollReveal>
      <Section>
        <div className="mb-4 flex flex-col items-center gap-4">
          <PageTitle align="center">{t("title")}</PageTitle>

          <p className="mt-3 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>
        </div>

        {partnerGroups.map((group) => (
          <PartnerGroupSection key={group.id} group={group} />
        ))}

        <PartnerLogoWall />
      </Section>
    </ScrollReveal>
  );
}
