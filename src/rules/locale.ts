import type { Direction, Locale } from "@/domain/locale";
import { routing } from "@/i18n/routing";

const RTL_LOCALES: Locale[] = ["ar"];

/** How each locale names itself — used by the language toggle. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export function getDirection(locale: Locale): Direction {
  return RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
}

export function isRtl(locale: Locale): boolean {
  return getDirection(locale) === "rtl";
}

/** The site has exactly two locales, so the toggle target is whichever is not current. */
export function getAlternateLocale(locale: Locale): Locale {
  return routing.locales.find((candidate) => candidate !== locale) ?? locale;
}
