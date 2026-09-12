import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import { remoteImages } from "@/fixture/images";

export default function CompanyView() {
  const t = useTranslations("company");

  return (
    <ScrollReveal>
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 pb-24 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div
          className="h-105 w-full rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${remoteImages.company})` }}
        />

        <div className="mb-4 flex flex-col gap-4">
          <PageTitle>{t("title")}</PageTitle>

          <p className="mt-8 font-sans text-base leading-[1.7] text-slate-600">
            {t("body")}
          </p>

          <blockquote className="mt-7 flex flex-col gap-4 border-s-amber-700 bg-white px-7 py-6">
            <p className="font-sans text-base font-medium italic leading-[1.6] text-slate-900">
              &ldquo;{t("quote")}&rdquo;
            </p>

            <p className="font-sans text-[13px] font-bold tracking-[0.03em] text-slate-500">
              {t("quoteAuthor")}
            </p>
          </blockquote>
        </div>
      </section>
    </ScrollReveal>
  );
}
