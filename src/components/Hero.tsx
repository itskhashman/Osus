"use client";

import { useLocale } from "@/lib/LocaleProvider";
import { images } from "@/lib/content";
import Button from "./Button";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  const { t, isRtl } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#f4f1eb] px-8">
      <div
        className={`absolute -top-15 h-55 w-55 rotate-45 bg-amber-700 opacity-90 ${
          isRtl ? "-left-15" : "-right-15"
        }`}
      />

      <div className="relative z-1 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-22">
        <div>
          <div className="mb-5 flex items-center gap-2.5">
            <div className="h-0.5 w-8.5 bg-amber-700" />

            <span className="font-sans text-[13px] font-bold tracking-widest text-amber-700">
              {t.hero.kicker}
            </span>
          </div>

          <h1 className="font-serif text-5xl font-extrabold leading-[1.05] text-slate-900 sm:text-[60px]">
            {t.hero.titleTop}
            <br />
            <span className="text-amber-700">{t.hero.titleAccent}</span>
          </h1>

          <p className="my-6 mb-8 max-w-130 font-sans text-[17px] leading-[1.6] text-slate-600">
            {t.hero.body}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/contact">{t.hero.primary}</Button>
            <Button href="/products" variant="outline">
              {t.hero.secondary}
            </Button>
          </div>
        </div>

        <div>
          <img
            src={assetPath("/assets/hero.png")}
            className="h-80 w-full rounded-lg shadow-2xl border border-slate-900/12 bg-cover bg-center sm:h-105"
          />
        </div>
      </div>
    </section>
  );
}
