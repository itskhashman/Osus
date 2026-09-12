"use client";

import { useTranslations } from "next-intl";
import type { SectorFilterValue } from "@/domain/project";
import { SECTOR_FILTERS } from "@/rules/projects";

type SectorFilterProps = {
  value: SectorFilterValue;
  onChange: (sector: SectorFilterValue) => void;
};

export default function SectorFilter({ value, onChange }: SectorFilterProps) {
  const t = useTranslations("projects.sectors");

  return (
    <div className="mb-8 flex flex-wrap gap-2.5">
      {SECTOR_FILTERS.map((sector) => {
        const isActive = sector === value;

        return (
          <button
            key={sector}
            type="button"
            onClick={() => onChange(sector)}
            className={[
              "rounded-full border px-4 py-2.25 font-sans text-xs font-bold tracking-[0.04em] transition",
              isActive
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100",
            ].join(" ")}
          >
            {t(sector)}
          </button>
        );
      })}
    </div>
  );
}
