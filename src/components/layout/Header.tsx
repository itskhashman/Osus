"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/domain/locale";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNav } from "@/fixture/navigation";
import { assetPath } from "@/lib/assetPath";
import { localImages } from "@/fixture/images";
import { getAlternateLocale, isRtl, LOCALE_LABELS } from "@/rules/locale";

const linkClass = (active: boolean) =>
  active
    ? "!text-[var(--osus-gold)]"
    : "text-slate-900 transition hover:!text-[var(--osus-gold)]";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const alternateLocale = getAlternateLocale(locale);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-[#f4f1eb]/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:gap-8 lg:px-8">
        <Link
          href="/"
          aria-label={t("common.homeAriaLabel")}
          className="flex items-center"
        >
          <img
            src={assetPath(localImages.logo)}
            alt="OSUS"
            className="block h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-4 font-sans text-base font-bold lg:gap-8 md:flex">
          {mainNav.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={`font-sans text-base font-bold ${linkClass(isActive(href))}`}
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={pathname}
            locale={alternateLocale}
            className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-sans text-sm font-bold tracking-[0.03em] !text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
            {LOCALE_LABELS[alternateLocale]}
          </Link>

          <Link
            href="/contact"
            className="hidden rounded-sm bg-amber-700 px-6 py-3.5 font-sans text-sm font-bold leading-none text-slate-900 transition hover:bg-amber-800 hover:text-white! sm:block"
          >
            {t("common.contactCta")}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t("common.toggleNavigation")}
            aria-expanded={open}
            className="flex h-12 w-12 items-center justify-center rounded-sm border-2 border-slate-900 text-2xl font-bold text-slate-900 md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={`flex flex-col gap-4 border-t border-slate-900/8 px-8 pb-6 pt-4 font-sans text-base font-bold md:hidden ${
            isRtl(locale) ? "text-right" : "text-left"
          }`}
        >
          {mainNav.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-sans text-base font-bold ${linkClass(isActive(href))}`}
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
