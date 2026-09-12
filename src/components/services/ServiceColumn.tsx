import { useTranslations } from "next-intl";
import type { ServiceColumn as ServiceColumnType } from "@/domain/service";
import Diamond from "@/components/common/Diamond";

export default function ServiceColumn({
  column,
}: {
  column: ServiceColumnType;
}) {
  const t = useTranslations(`services.columns.${column.id}`);

  return (
    <div>
      <h3 className="mb-5 font-serif text-[23px] text-amber-700">
        {t("heading")}
      </h3>

      {column.itemIds.map((itemId) => (
        <div
          key={itemId}
          className="flex items-start gap-3.5 border-t border-slate-900/12 py-4"
        >
          <Diamond size={8} style={{ marginTop: 6 }} />

          <div>
            <div className="font-sans text-base font-semibold text-slate-900">
              {t(`items.${itemId}.title`)}
            </div>

            <div className="mt-1 font-sans text-[13px] leading-normal text-slate-600">
              {t(`items.${itemId}.description`)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
