import { useTranslations } from "next-intl";
import type { Project } from "@/domain/project";
import PlaceholderImage from "@/components/common/PlaceholderImage";
import { getProjectServices } from "@/rules/projects";
import { useProjectText } from "@/services/projects/useProjectText";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const text = useProjectText();
  const [mainService] = getProjectServices(project);

  const parties = [
    { label: t("fields.consultant"), value: project.consultant },
    { label: t("fields.contractor"), value: project.contractor },
  ].filter((party) => party.value);

  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-slate-200 bg-surface">
      <PlaceholderImage
        label={t(`services.${mainService ?? "other"}`)}
        height={150}
        diamondSize={12}
        fontSize={11}
      />

      <div className="flex flex-1 flex-col gap-2 p-6">
        {project.location && (
          <span className="font-sans text-[11px] font-bold tracking-[0.08em] text-amber-700 uppercase">
            {text.location(project)}
          </span>
        )}

        <h3 className="font-serif text-[21px] leading-[1.15] text-slate-900">
          {project.name}
        </h3>

        {project.endUser && (
          <p className="font-sans text-[13px] leading-[1.55] text-slate-600">
            {project.endUser}
          </p>
        )}

        {parties.length > 0 && (
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-sans text-[12px] leading-[1.5]">
            {parties.map((party) => (
              <div key={party.label} className="contents">
                <dt className="font-semibold text-slate-500">{party.label}</dt>
                <dd className="text-slate-600">{party.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.scopes.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {project.scopes.map((scope) => (
              <li
                key={scope}
                className="rounded-full border border-amber-700/30 px-2.5 py-1 font-sans text-[11px] font-semibold text-slate-700"
              >
                {text.scope(scope)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
