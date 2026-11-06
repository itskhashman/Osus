import type { PartnerLogo } from "@/domain/partner";

const LOGO_DIRECTORY = "/assets/succcesful_partners";

/** Path under public/, without the basePath — OptimizedImage adds it. */
export function getPartnerLogoSrc(logo: PartnerLogo): string {
  return `${LOGO_DIRECTORY}/${logo.file}`;
}
