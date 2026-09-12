import { useTranslations } from "next-intl";
import CertificateCard from "@/components/certificates/CertificateCard";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import Section from "@/components/common/Section";
import { certificates } from "@/fixture/certificates";

export default function CertificatesView() {
  const t = useTranslations("certificates");

  return (
    <ScrollReveal>
      <Section>
        <div className="mb-4 flex flex-col gap-4">
          <PageTitle>{t("title")}</PageTitle>

          <p className="mt-3 max-w-140 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </Section>
    </ScrollReveal>
  );
}
