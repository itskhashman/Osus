import { useTranslations } from "next-intl";
import type { Project } from "@/domain/project";
import PlaceholderImage from "@/components/common/PlaceholderImage";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const item = useTranslations(`projects.items.${project.id}`);

  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-slate-200 bg-white">
      <PlaceholderImage
        label={t(`sectors.${project.sector}`)}
        height={170}
        diamondSize={12}
        fontSize={11}
      />

      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-sans text-[11px] font-bold tracking-[0.08em] text-amber-700">
          {t(`status.${project.status}`)}
        </span>

        <h3 className="font-serif text-[21px] leading-[1.15] text-slate-900">
          {item("name")}
        </h3>

        <p className="font-sans text-[13px] leading-[1.55] text-slate-600">
          {item("meta")}
        </p>

        <p className="mt-auto font-sans text-[13px] leading-[1.55] text-slate-500">
          {item("scope")}
        </p>
      </div>
    </div>
  );
}
