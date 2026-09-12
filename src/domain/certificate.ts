export type CertificateId =
  | "iso9001"
  | "commercialRegister"
  | "approvalLetter";

/** The label lives under `certificates.items.<id>` in the messages. */
export type Certificate = {
  id: CertificateId;
  image: string;
};
