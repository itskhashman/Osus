"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";

const NAV = [
  { key: "home", href: "/" },
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
  { key: "partners", href: "/partners" },
  { key: "projects", href: "/projects" },
  { key: "company", href: "/company" },
];

export default function Header() {
  const { t, toggle, isRtl } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/[0.08] bg-[#f4f1eb]/95 backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4">
        <Link href="/" aria-label="OSUS home" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NODE_ENV === "production" ? "/Osus" : ""}/assets/osus-logo-clear.png`}
            alt="OSUS"
            className="block h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 font-sans text-sm font-semibold md:flex">
          {NAV.map(({ key, href }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={key}
                href={href}
                className={
                  active
                    ? "text-amber-700"
                    : "text-slate-900 transition hover:text-amber-700"
                }
              >
                {t.nav[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-[9px] font-sans text-xs font-bold tracking-[0.03em] text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
            {t.langToggle}
          </button>

          <Link
            href="/contact"
            className="hidden rounded-sm bg-amber-700 px-5 py-[11px] font-sans text-[13px] font-bold leading-none text-slate-900 transition hover:bg-amber-800 sm:block"
          >
            {t.contactCta}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-slate-900 text-xl text-slate-900 md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={`flex flex-col gap-3 border-t border-slate-900/[0.08] px-8 pb-5 pt-3 font-sans text-sm font-semibold md:hidden ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          {NAV.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className="text-slate-900 transition hover:text-amber-700"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
