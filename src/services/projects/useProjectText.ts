import { useTranslations } from "next-intl";
import type { Project } from "@/domain/project";
import { toMessageKey } from "@/rules/projects";

export function useProjectText() {
  const locations = useTranslations("projects.locations");
  const scopes = useTranslations("projects.scopes");

  const location = (project: Project) => {
    const key = toMessageKey(project.location);
    return key && locations.has(key) ? locations(key) : project.location;
  };

  const scope = (text: string) => {
    const key = toMessageKey(text);
    return key && scopes.has(key) ? scopes(key) : text;
  };

  return { location, scope };
}
