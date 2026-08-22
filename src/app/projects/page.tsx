'use client';

import { useMemo, useState } from 'react';
import { useLocale } from '@/lib/LocaleProvider';
import { projects, PAGE_SIZE } from '@/lib/projects';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const { t, locale } = useLocale();
  const [sector, setSector] = useState('all');
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => projects.filter((p) => sector === 'all' || p.sector === sector),
    [sector]
  );

  const visible = filtered.slice(0, shown);
  const hasMore = filtered.length > shown;

  const selectSector = (key) => {
    setSector(key);
    setShown(PAGE_SIZE);
  };

  return (
    <Section>
      <div className="mb-11">
        <PageTitle>{t.projects.title}</PageTitle>
      </div>

      {/* Sector filter */}
      <div className="mb-8 flex flex-wrap gap-2.5">
        {Object.entries(t.projects.sectors).map(([key, label]) => {
          const isActive = sector === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => selectSector(key)}
              className={[
                'rounded-full border px-4 py-2.25 font-sans text-xs font-bold tracking-[0.04em] transition',
                isActive
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100',
              ].join(' ')}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            sectorLabel={t.projects.sectors[project.sector]}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + PAGE_SIZE)}
            className="rounded-sm border-[1.5px] border-slate-900 bg-transparent px-7.5 py-3.75 font-sans text-[13px] font-bold tracking-[0.04em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            {t.projects.loadMore}
          </button>
        </div>
      )}
    </Section>
  );
}