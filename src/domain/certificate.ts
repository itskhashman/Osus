import type { StaticImageData } from "next/image";

export type CertificateId = "iso9001" | "nebbTab";

/**
 * A certificate as printed on the document. Title, subtitle, issuer, holder
 * and scope live under `certificates.items.<id>` in the messages.
 */
export type Certificate = {
  id: CertificateId;
  image: StaticImageData;
  number: string;
};
