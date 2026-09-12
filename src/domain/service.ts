export type ServiceColumnId = "supply" | "engineering" | "testing";

export type ServiceItemId =
  | "pumpRooms"
  | "hvac"
  | "odorControl"
  | "mepDesign"
  | "shopDrawings"
  | "asBuiltDrawings"
  | "balancing"
  | "performance"
  | "commissioning";

/** Copy for each column and item lives under `services.columns` in the messages. */
export type ServiceColumn = {
  id: ServiceColumnId;
  itemIds: ServiceItemId[];
};

export type ServiceItem = {
  title: string;
  description: string;
};
