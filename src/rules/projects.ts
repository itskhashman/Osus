import type { Project, SectorFilterValue } from "@/domain/project";

export const PROJECTS_PAGE_SIZE = 6;

export const SECTOR_FILTERS: SectorFilterValue[] = [
  "all",
  "residential",
  "commercial",
  "industrial",
  "water",
];

export function filterProjectsBySector(
  projects: Project[],
  sector: SectorFilterValue,
): Project[] {
  if (sector === "all") return projects;

  return projects.filter((project) => project.sector === sector);
}
