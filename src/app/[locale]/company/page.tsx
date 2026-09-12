import { setRequestLocale } from "next-intl/server";
import CompanyView from "@/views/company/companyView";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CompanyView />;
}
