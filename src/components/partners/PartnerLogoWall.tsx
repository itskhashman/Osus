import OptimizedImage from "@/components/common/OptimizedImage";
import { useTranslations } from "next-intl";
import { partnerLogos } from "@/fixture/partners";
import { getPartnerLogoSrc } from "@/rules/partners";

export default function PartnerLogoWall() {
  const t = useTranslations("partners");

  return (
    <div>
      <h3 className="mb-4 font-serif text-xl text-slate-900">
        {t("logoWallTitle")}
      </h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {partnerLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex h-24 items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-white px-4 py-3"
          >
            <div className="relative h-full max-h-16 w-full">
              <OptimizedImage
                src={getPartnerLogoSrc(logo)}
                alt={t("logoAlt", { id: logo.id })}
                fill
                placeholder="empty"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
