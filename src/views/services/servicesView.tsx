import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import Section from "@/components/common/Section";
import ServiceColumn from "@/components/services/ServiceColumn";
import { serviceColumns } from "@/fixture/services";

export default function ServicesView() {
  const t = useTranslations("services");

  return (
    <ScrollReveal>
      <Section>
        <div className="mb-4 flex flex-col items-center gap-4">
          <PageTitle align="center">{t("title")}</PageTitle>

          <p className="mt-3 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-11 md:grid-cols-3">
          {serviceColumns.map((column) => (
            <ServiceColumn key={column.id} column={column} />
          ))}
        </div>
      </Section>
    </ScrollReveal>
  );
}
