import { setRequestLocale } from "next-intl/server";
import CertificatesView from "@/views/certificates/certificatesView";

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CertificatesView />;
}
