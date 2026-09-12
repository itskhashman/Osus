export type ProjectSector =
  | "residential"
  | "commercial"
  | "industrial"
  | "water";

export type SectorFilterValue = "all" | ProjectSector;

export type ProjectStatus = "preQualified" | "completed" | "inProgress";

/** Name, meta and scope live under `projects.items.<id>` in the messages. */
export type Project = {
  id: string;
  sector: ProjectSector;
  status: ProjectStatus;
};
