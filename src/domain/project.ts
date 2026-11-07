/** Service areas a project's scope is grouped under, used by the filter. */
export type ProjectService =
  | "pumps"
  | "valves"
  | "tab"
  | "engineering"
  | "instruments";

export type ServiceFilterValue = "all" | ProjectService;

/**
 * A reference-list project. Names, companies and places are proper nouns from
 * the company's reference list, so they aren't translated.
 */
export type Project = {
  id: string;
  name: string;
  location: string;
  endUser: string;
  consultant: string;
  contractor: string;
  /** OSUS Al Roqey scope, one entry per line in the reference list. */
  scopes: string[];
  /** Main project (marked red in the reference list): shown as a card. */
  featured: boolean;
};
