import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/domain/locale";
import Button from "@/components/common/Button";
import { localImages } from "@/fixture/images";
import { assetPath } from "@/lib/assetPath";
import { isRtl } from "@/rules/locale";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;

  return (
    <section className="relative overflow-hidden bg-[#f4f1eb] px-8">
      <div
        className={`absolute -top-15 h-55 w-55 rotate-45 bg-amber-700 opacity-90 ${
          isRtl(locale) ? "-left-15" : "-right-15"
        }`}
      />

      <div className="z-1 mx-auto flex max-w-7xl flex-row items-center justify-between gap-12 py-24 lg:py-22">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="h-0.5 w-8.5 bg-amber-700" />

            <span className="font-sans text-[13px] font-bold tracking-widest text-amber-700">
              {t("kicker")}
            </span>
          </div>

          <h1 className="font-serif text-5xl font-extrabold leading-[1.05] text-slate-900 sm:text-[60px]">
            {t("titleTop")}
            <br />
            <span className="text-amber-700">{t("titleAccent")}</span>
          </h1>

          <p className="my-8 mb-8 max-w-130 font-sans text-[17px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/contact">{t("primary")}</Button>
            <Button href="/products" variant="outline">
              {t("secondary")}
            </Button>
          </div>
        </div>

        <div>
          <img
            src={assetPath(localImages.hero)}
            alt=""
            className="h-80 w-160 rounded-lg border border-slate-900/12 bg-cover bg-center shadow-2xl sm:h-105"
          />
        </div>
      </div>
    </section>
  );
}
