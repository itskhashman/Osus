"use client";

import { useMemo, useState } from "react";
import type { ServiceFilterValue } from "@/domain/project";
import { projects } from "@/fixture/projects";
import {
  FEATURED_PAGE_SIZE,
  filterProjectsByService,
  getPageCount,
  TABLE_PAGE_SIZE,
} from "@/rules/projects";

const featuredProjects = projects.filter((project) => project.featured);
const referenceProjects = projects.filter((project) => !project.featured);

export function useProjectList() {
  const [service, setService] = useState<ServiceFilterValue>("all");
  const [shown, setShown] = useState(FEATURED_PAGE_SIZE);
  const [page, setPage] = useState(1);

  const featured = useMemo(
    () => filterProjectsByService(featuredProjects, service),
    [service],
  );
  const references = useMemo(
    () => filterProjectsByService(referenceProjects, service),
    [service],
  );

  const pageCount = getPageCount(references.length, TABLE_PAGE_SIZE);

  const selectService = (next: ServiceFilterValue) => {
    setService(next);
    setShown(FEATURED_PAGE_SIZE);
    setPage(1);
  };

  return {
    service,
    selectService,
    featured: {
      visible: featured.slice(0, shown),
      hasMore: featured.length > shown,
      showMore: () => setShown((count) => count + FEATURED_PAGE_SIZE),
    },
    references: {
      total: references.length,
      rows: references.slice(
        (page - 1) * TABLE_PAGE_SIZE,
        page * TABLE_PAGE_SIZE,
      ),
      page,
      pageCount,
      goToPage: (next: number) =>
        setPage(Math.min(Math.max(next, 1), pageCount)),
    },
  };
}
