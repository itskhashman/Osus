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
            <img
              src={getPartnerLogoSrc(logo)}
              alt={t("logoAlt", { id: logo.id })}
              className="h-full max-h-16 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
