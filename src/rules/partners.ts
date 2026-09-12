import type { PartnerLogo } from "@/domain/partner";
import { assetPath } from "@/lib/assetPath";

const LOGO_DIRECTORY = "/assets/succcesful_partners";

export function getPartnerLogoSrc(logo: PartnerLogo): string {
  return assetPath(`${LOGO_DIRECTORY}/${logo.file}`);
}
