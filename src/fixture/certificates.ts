import type { Certificate } from "@/domain/certificate";
import iso9001 from "@/assets/certificates/iso-9001-2015.jpg";
import nebbTab from "@/assets/certificates/nebb-tab-technician.jpg";

export const certificates: Certificate[] = [
  {
    id: "iso9001",
    image: iso9001,
    number: "AMER401824",
  },
  {
    id: "nebbTab",
    image: nebbTab,
    number: "CT-22784",
  },
];
