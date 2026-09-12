import { useTranslations } from "next-intl";
import type { PartnerGroup } from "@/domain/partner";
import BrandTile from "@/components/common/BrandTile";

export default function PartnerGroupSection({
  group,
}: {
  group: PartnerGroup;
}) {
  const t = useTranslations("partners.groups");

  return (
    <div className="mb-9">
      <h3 className="mb-4 font-serif text-xl text-slate-900">{t(group.id)}</h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {group.brands.map((brand) => (
          <BrandTile key={brand} name={brand} />
        ))}
      </div>
    </div>
  );
}
