import { useTranslations } from "next-intl";
import type { Project } from "@/domain/project";
import { toMessageKey } from "@/rules/projects";

/**
 * Localized location and scope text for reference-list projects. Values come
 * from `projects.locations` / `projects.scopes` in the messages, keyed by the
 * source text; anything not translated yet falls back to the source text.
 */
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
