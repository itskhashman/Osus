import { useTranslations } from "next-intl";
import type { Certificate } from "@/domain/certificate";

export default function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const t = useTranslations("certificates.items");

  return (
    <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
      <div
        className="h-55 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${certificate.image})` }}
      />

      <div className="p-4 text-center font-sans text-[13px] font-bold text-slate-900">
        {t(certificate.id)}
      </div>
    </div>
  );
}
