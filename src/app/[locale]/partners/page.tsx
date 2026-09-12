import { setRequestLocale } from "next-intl/server";
import PartnersView from "@/views/partners/partnersView";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PartnersView />;
}
