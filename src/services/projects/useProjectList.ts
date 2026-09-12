"use client";

import { useMemo, useState } from "react";
import type { SectorFilterValue } from "@/domain/project";
import { projects } from "@/fixture/projects";
import { filterProjectsBySector, PROJECTS_PAGE_SIZE } from "@/rules/projects";

export function useProjectList() {
  const [sector, setSector] = useState<SectorFilterValue>("all");
  const [shown, setShown] = useState(PROJECTS_PAGE_SIZE);

  const filtered = useMemo(
    () => filterProjectsBySector(projects, sector),
    [sector],
  );

  const selectSector = (next: SectorFilterValue) => {
    setSector(next);
    setShown(PROJECTS_PAGE_SIZE);
  };

  const showMore = () => setShown((count) => count + PROJECTS_PAGE_SIZE);

  return {
    sector,
    selectSector,
    visible: filtered.slice(0, shown),
    hasMore: filtered.length > shown,
    showMore,
  };
}
