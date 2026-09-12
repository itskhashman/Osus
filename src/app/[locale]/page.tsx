import { setRequestLocale } from "next-intl/server";
import HomeView from "@/views/home/homeView";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeView />;
}
