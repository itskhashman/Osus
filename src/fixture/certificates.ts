import type { Certificate } from "@/domain/certificate";
import iso9001 from "@/assets/certificates/iso-9001-2015.jpg";
import nebbTab from "@/assets/certificates/nebb-tab-technician.jpg";

export const certificates: Certificate[] = [
  {
    id: "iso9001",
    image: iso9001,
    number: "AMER401824",
    dates: [
      { kind: "issued", date: "2026-06-24" },
      { kind: "surveillanceExpiry", date: "2027-06-23" },
      { kind: "recertification", date: "2029-06-23" },
    ],
  },
  {
    id: "nebbTab",
    image: nebbTab,
    number: "CT-22784",
    dates: [{ kind: "expiry", date: "2025-12-31" }],
  },
];
