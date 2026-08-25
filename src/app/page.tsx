"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleProvider";
import { images } from "@/lib/content";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CtaBand from "@/components/CtaBand";
import PlaceholderImage from "@/components/PlaceholderImage";
import BrandTile, {
  getPartnerImage,
  partnerImageFiles,
} from "@/components/BrandTile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";

export default function HomePage() {
  const { t, locale, isRtl } = useLocale();
  const [carouselApi, setCarouselApi] = useState<{ scrollNext: () => void }>();

  useEffect(() => {
    if (!carouselApi) return;

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 1100);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="border-y border-slate-200 bg-slate-50 px-8 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div>
              <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900">
                Successful Partners
              </h2>
            </div>
          </div>

          <Carousel
            key={locale}
            setApi={setCarouselApi}
            opts={{
              align: "center",
              loop: true,
              direction: isRtl ? "rtl" : "ltr",
            }}
            className="mx-8"
          >
            <CarouselContent className="-ml-8">
              {partnerImageFiles.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/5"
                >
                  <BrandTile
                    name={`Partner ${image.id}`}
                    image={getPartnerImage(image.id - 1)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <img
          src={assetPath("/assets/pumps.png")}
          className="h-80 w-full rounded-lg shadow-2xl border border-slate-900/12 bg-cover bg-center sm:h-105"
        />

        <div>
          <span className="font-sans text-[13px] font-bold tracking-widest text-amber-700">
            {t.company.kicker}
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-slate-900">
            {t.company.title}
          </h2>

          <p className="mt-4 font-sans text-base leading-relaxed text-slate-600">
            {t.company.body}
          </p>

          <Link
            href="/company"
            className="mt-5 inline-block font-sans text-sm font-bold text-amber-700"
          >
            {t.company.readMore} →
          </Link>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-sans text-[13px] font-bold tracking-widest text-amber-700">
                {t.products.kicker}
              </span>

              <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900">
                {t.products.title}
              </h2>
            </div>

            <Link
              href="/products"
              className="font-sans text-sm font-bold text-amber-700"
            >
              {t.products.viewAll} →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.products.items.map((product) => (
              <div
                key={product.slug}
                className="overflow-hidden rounded-sm border border-slate-200"
              >
                <img
                  src={assetPath("/assets/hero.png")}
                  className="h-20 w-full rounded-sm border border-slate-900/12 bg-cover bg-center sm:h-40"
                />

                <div className="p-5">
                  <h3 className="mb-1.5 font-serif text-[19px] font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="font-sans text-[13px] leading-relaxed text-slate-500">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
