"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const t = useTranslations("common");
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t("toggleTheme")}
      title={t("toggleTheme")}
      className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-slate-900 text-slate-900 transition hover:border-amber-700 hover:text-amber-700"
    >
      {/* Both icons render and CSS picks one, so server and client markup
          match before next-themes knows the theme. */}
      <Moon className="h-5 w-5 dark:hidden" aria-hidden />
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden />
    </button>
  );
}
