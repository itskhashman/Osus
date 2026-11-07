import type {
  Project,
  ProjectService,
  ServiceFilterValue,
} from "@/domain/project";

export const FEATURED_PAGE_SIZE = 6;

export const TABLE_PAGE_SIZE = 10;

export const SERVICE_FILTERS: ServiceFilterValue[] = [
  "all",
  "pumps",
  "valves",
  "tab",
  "engineering",
  "instruments",
];

/** Keywords in a scope line that place a project under a service. */
const SERVICE_PATTERNS: Record<ProjectService, RegExp> = {
  pumps: /pump|booster|mixer/i,
  valves: /valve/i,
  tab: /\bTAB\b|flushing|balanc/i,
  engineering: /engineer|design|drawing|mechanical works/i,
  instruments: /meter|sensor|gauge/i,
};

export function getProjectServices(project: Project): ProjectService[] {
  return (Object.keys(SERVICE_PATTERNS) as ProjectService[]).filter((service) =>
    project.scopes.some((scope) => SERVICE_PATTERNS[service].test(scope)),
  );
}

export function filterProjectsByService(
  projects: Project[],
  service: ServiceFilterValue,
): Project[] {
  if (service === "all") return projects;

  return projects.filter((project) =>
    getProjectServices(project).includes(service),
  );
}

export function getPageCount(total: number, pageSize: number): number {
  return Math.max(1, Math.ceil(total / pageSize));
}

/**
 * Page numbers to show in the pagination, with "ellipsis" for skipped runs:
 * always the first and last page, plus the current page and its neighbours.
 */
export function getPageItems(
  page: number,
  pageCount: number,
): (number | "ellipsis")[] {
  const pages = new Set(
    [1, page - 1, page, page + 1, pageCount].filter(
      (value) => value >= 1 && value <= pageCount,
    ),
  );
  const sorted = [...pages].sort((a, b) => a - b);
  const items: (number | "ellipsis")[] = [];

  sorted.forEach((value, index) => {
    const previous = sorted[index - 1];
    if (previous !== undefined && value - previous > 1) items.push("ellipsis");
    items.push(value);
  });

  return items;
}

/** Message key for a source-text value, e.g. "KAEC - Rabigh" → "kaec-rabigh". */
export function toMessageKey(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
