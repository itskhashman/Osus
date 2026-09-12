export type PartnerGroupId = "pumps" | "valves" | "panels" | "meters";

/** Brand names are proper nouns, so they are not translated. */
export type PartnerGroup = {
  id: PartnerGroupId;
  brands: string[];
};

export type PartnerLogo = {
  id: number;
  file: string;
};
