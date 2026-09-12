import { setRequestLocale } from "next-intl/server";
import ServicesView from "@/views/services/servicesView";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesView />;
}
