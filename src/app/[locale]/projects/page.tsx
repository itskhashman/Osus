import { setRequestLocale } from "next-intl/server";
import ProjectsView from "@/views/projects/projectsView";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsView />;
}
