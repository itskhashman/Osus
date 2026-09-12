import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerCompanyNav, footerSolutionsNav } from "@/fixture/navigation";
import { localImages } from "@/fixture/images";
import { assetPath } from "@/lib/assetPath";

const linksClass =
  "font-sans text-[13px] !text-white/80 transition hover:!text-[var(--osus-gold)]";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 px-8 pb-8 pt-17.5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <img
            src={assetPath(localImages.logoLight)}
            alt="OSUS"
            className="mb-4 block h-9.5 w-auto"
          />

          <p className="max-w-65 font-sans text-[13px] leading-[1.6] text-white/75">
            {t("footer.tagline")}
          </p>

          <a
            href="https://www.osus-ro.com"
            className="mt-3 inline-block font-sans text-[13px] font-semibold text-white! hover:text-(--osus-gold-light)!"
          >
            {t("footer.site")}
          </a>
        </div>

        <div>
          <div className="mb-4 font-sans text-xs font-bold tracking-[0.06em] text-white">
            {t("footer.company")}
          </div>

          <div className="flex flex-col gap-2.5">
            {footerCompanyNav.map(({ key, href }) => (
              <Link key={key} href={href} className={linksClass}>
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 font-sans text-xs font-bold tracking-[0.06em] text-white">
            {t("footer.solutions")}
          </div>

          <div className="flex flex-col gap-2.5">
            {footerSolutionsNav.map(({ key, href }) => (
              <Link key={key} href={href} className={linksClass}>
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 font-sans text-xs font-bold tracking-[0.06em] text-white">
            {t("footer.getInTouch")}
          </div>

          <p className="font-sans text-[13px] leading-[1.7] text-white/75">
            {t("contact.address")}
            <br />
            {t("contact.email")}
            <br />
            {t("contact.phone")}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 font-sans text-xs text-white/50">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
