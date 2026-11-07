"use client";

import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import Section from "@/components/common/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectReferencesTable from "@/components/projects/ProjectReferencesTable";
import ServiceFilter from "@/components/projects/ServiceFilter";
import { useProjectList } from "@/services/projects/useProjectList";

export default function ProjectsView() {
  const t = useTranslations("projects");
  const { service, selectService, featured, references } = useProjectList();

  return (
    <ScrollReveal>
      <Section>
        <div className="mb-11">
          <PageTitle>{t("title")}</PageTitle>

          <p className="mt-3 max-w-140 font-sans text-[15px] leading-[1.6] text-slate-600">
            {t("body")}
          </p>
        </div>

        <ServiceFilter value={service} onChange={selectService} />

        <h2 className="mb-6 font-serif text-[28px] font-bold text-slate-900">
          {t("mainTitle")}
        </h2>

        {featured.visible.length === 0 ? (
          <p className="font-sans text-sm text-slate-500">{t("table.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {featured.hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={featured.showMore}
              className="rounded-sm border-[1.5px] border-slate-900 bg-transparent px-7.5 py-3.75 font-sans text-[13px] font-bold tracking-[0.04em] text-slate-900 transition hover:bg-slate-900 hover:text-page"
            >
              {t("loadMore")}
            </button>
          </div>
        )}

        <div className="mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-[28px] font-bold text-slate-900">
                {t("referencesTitle")}
              </h2>
              <p className="mt-2 max-w-140 font-sans text-sm leading-[1.6] text-slate-600">
                {t("referencesBody")}
              </p>
            </div>

            <span className="font-sans text-xs font-bold tracking-[0.06em] text-slate-500">
              {t("count", { count: references.total })}
            </span>
          </div>

          <ProjectReferencesTable
            rows={references.rows}
            page={references.page}
            pageCount={references.pageCount}
            onPageChange={references.goToPage}
          />
        </div>
      </Section>
    </ScrollReveal>
  );
}
