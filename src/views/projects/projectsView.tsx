"use client";

import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import Section from "@/components/common/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import SectorFilter from "@/components/projects/SectorFilter";
import { useProjectList } from "@/services/projects/useProjectList";

export default function ProjectsView() {
  const t = useTranslations("projects");
  const { sector, selectSector, visible, hasMore, showMore } = useProjectList();

  return (
    <ScrollReveal>
      <Section>
        <div className="mb-11">
          <PageTitle>{t("title")}</PageTitle>

          <p className="mt-3 max-w-140 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>
        </div>

        <SectorFilter value={sector} onChange={selectSector} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={showMore}
              className="rounded-sm border-[1.5px] border-slate-900 bg-transparent px-7.5 py-3.75 font-sans text-[13px] font-bold tracking-[0.04em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              {t("loadMore")}
            </button>
          </div>
        )}
      </Section>
    </ScrollReveal>
  );
}
