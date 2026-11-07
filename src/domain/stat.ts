export type StatId = "founded" | "experience" | "quality" | "reach";

/**
 * The label lives under `stats.<id>` in the messages. A value that needs
 * translating (e.g. "KSA") can be overridden under `stats.values.<id>`.
 */
export type Stat = {
  id: StatId;
  value: string;
  /** Counts up from zero when the stats bar mounts. */
  animated?: boolean;
};
