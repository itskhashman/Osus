import { useTranslations } from "next-intl";
import PageTitle from "@/components/common/PageTitle";
import { remoteImages } from "@/fixture/images";

export default function ContactDetails() {
  const t = useTranslations("contact");

  return (
    <div>
      <PageTitle>{t("title")}</PageTitle>

      <p className="mt-5 font-sans text-[15px] leading-[1.7] text-slate-600">
        {t("address")}
        <br />
        {t("email")}
        <br />
        {t("phone")}
      </p>

      <div
        className="mt-7 h-55 w-full rounded-sm bg-cover bg-center"
        style={{ backgroundImage: `url(${remoteImages.contact})` }}
      />
    </div>
  );
}
