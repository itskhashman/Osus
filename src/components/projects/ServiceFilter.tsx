"use client";

import { useTranslations } from "next-intl";
import type { ServiceFilterValue } from "@/domain/project";
import { SERVICE_FILTERS } from "@/rules/projects";

type ServiceFilterProps = {
  value: ServiceFilterValue;
  onChange: (service: ServiceFilterValue) => void;
};

export default function ServiceFilter({ value, onChange }: ServiceFilterProps) {
  const t = useTranslations("projects.services");

  return (
    <div className="mb-8 flex flex-wrap gap-2.5">
      {SERVICE_FILTERS.map((service) => {
        const isActive = service === value;

        return (
          <button
            key={service}
            type="button"
            onClick={() => onChange(service)}
            aria-pressed={isActive}
            className={[
              "rounded-full border px-4 py-2.25 font-sans text-xs font-bold tracking-[0.04em] transition",
              isActive
                ? "border-slate-900 bg-slate-900 text-page"
                : "border-line-strong bg-transparent text-slate-900 hover:bg-slate-100",
            ].join(" ")}
          >
            {t(service)}
          </button>
        );
      })}
    </div>
  );
}
