import type { ServiceColumn } from "@/domain/service";

export const serviceColumns: ServiceColumn[] = [
  { id: "supply", itemIds: ["pumpRooms", "hvac", "odorControl"] },
  {
    id: "engineering",
    itemIds: ["mepDesign", "shopDrawings", "asBuiltDrawings"],
  },
  { id: "testing", itemIds: ["balancing", "performance", "commissioning"] },
];
