import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { localImages } from "@/fixture/images";
import { assetPath } from "@/lib/assetPath";

export default function CompanyIntro() {
  const t = useTranslations();

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <img
        src={assetPath(localImages.company)}
        alt=""
        className="h-80 w-full rounded-lg border border-slate-900/12 bg-cover bg-center shadow-2xl sm:h-105"
      />

      <div>
        <span className="font-sans text-[13px] font-bold tracking-widest text-amber-700">
          {t("company.kicker")}
        </span>

        <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-slate-900">
          {t("company.title")}
        </h2>

        <p className="mt-4 font-sans text-base leading-relaxed text-slate-600">
          {t("company.body")}
        </p>

        <Link
          href="/company"
          className="mt-5 inline-block font-sans text-sm font-bold text-amber-700"
        >
          {t("common.readMore")} →
        </Link>
      </div>
    </section>
  );
}
