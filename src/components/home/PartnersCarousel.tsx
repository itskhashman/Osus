"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/domain/locale";
import BrandTile from "@/components/common/BrandTile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { partnerLogos } from "@/fixture/partners";
import { useAutoAdvance } from "@/hooks/useAutoAdvance";
import { getDirection } from "@/rules/locale";
import { getPartnerLogoSrc } from "@/rules/partners";

const ADVANCE_INTERVAL_MS = 1100;

export default function PartnersCarousel() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [carouselApi, setCarouselApi] = useState<{ scrollNext: () => void }>();

  useAutoAdvance(carouselApi, ADVANCE_INTERVAL_MS);

  return (
    <section className="border-y border-slate-200 bg-slate-50 px-8 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-center gap-4">
          <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900">
            {t("home.partnersTitle")}
          </h2>
        </div>

        <Carousel
          key={locale}
          setApi={setCarouselApi}
          opts={{
            align: "center",
            loop: true,
            direction: getDirection(locale),
          }}
          className="mx-8"
        >
          <CarouselContent className="-ml-8">
            {partnerLogos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="basis-full sm:basis-1/2 lg:basis-1/5"
              >
                <BrandTile
                  name={t("partners.logoAlt", { id: logo.id })}
                  image={getPartnerLogoSrc(logo)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
