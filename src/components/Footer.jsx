'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/LocaleProvider';

const linksClass =
  'font-sans text-[13px] text-[var(--on-dark-muted)] transition hover:text-white';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-slate-900 px-8 pb-8 pt-[70px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/osus-logo-light.png"
            alt="OSUS"
            className="mb-4 block h-[38px] w-auto"
          />

          <p className="max-w-[260px] font-sans text-[13px] leading-[1.6] text-slate-400">
            {t.footer.tagline}
          </p>

          <a
            href="https://www.osus-ro.com"
            className="mt-3 inline-block font-sans text-[13px] font-semibold text-amber-700 hover:text-amber-600"
          >
            {t.footer.site}
          </a>
        </div>

        <div>
          <div className="mb-4 font-sans text-xs font-bold tracking-[0.06em] text-white">
            {t.footer.company}
          </div>

          <div className="flex flex-col gap-2.5">
            <Link href="/company" className={linksClass}>
              {t.nav.company}
            </Link>
            <Link href="/projects" className={linksClass}>
              {t.nav.projects}
            </Link>
            <Link href="/partners" className={linksClass}>
              {t.nav.partners}
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-4 font-sans text-xs font-bold tracking-[0.06em] text-white">
            {t.footer.solutions}
          </div>

          <div className="flex flex-col gap-2.5">
            <Link href="/products" className={linksClass}>
              {t.nav.products}
            </Link>
            <Link href="/services" className={linksClass}>
              {t.nav.services}
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-4 font-sans text-xs font-bold tracking-[0.06em] text-white">
            {t.footer.getInTouch}
          </div>

          <p className="font-sans text-[13px] leading-[1.7] text-slate-400">
            {t.contact.address}
            <br />
            {t.contact.email}
            <br />
            {t.contact.phone}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-700 pt-6 font-sans text-xs text-slate-500">
        {t.footer.copyright}
      </div>
    </footer>
  );
}