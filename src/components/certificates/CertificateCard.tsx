"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Certificate } from "@/domain/certificate";
import LoadingImage from "@/components/common/LoadingImage";
import OptimizedImage from "@/components/common/OptimizedImage";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/** Card with a preview of the certificate; opens the full document in a dialog. */
export default function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const t = useTranslations("certificates");
  const item = useTranslations(`certificates.items.${certificate.id}`);
  const details = [
    { label: t("fields.number"), value: certificate.number },
    { label: t("fields.holder"), value: item("holder") },
    { label: t("fields.issuer"), value: item("issuer") },
  ];

  return (
    <Dialog>
      <DialogTrigger className="group flex w-full flex-col overflow-hidden rounded-sm border border-slate-200 bg-surface text-start transition hover:border-amber-700/60 focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:outline-none">
        <LoadingImage
          src={certificate.image}
          alt={item("title")}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="h-64 w-full bg-slate-100"
          imageClassName="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
        />

        <div className="flex flex-1 flex-col gap-1.5 p-5">
          <span className="font-sans text-[11px] font-bold tracking-[0.08em] text-amber-700 uppercase">
            {item("issuer")}
          </span>
          <h3 className="font-serif text-[21px] leading-tight text-slate-900">
            {item("title")}
          </h3>
          <p className="font-sans text-[13px] leading-normal text-slate-600">
            {item("subtitle")}
          </p>
          <span className="mt-3 font-sans text-[13px] font-bold text-slate-900 group-hover:text-amber-700">
            {t("view")} <span className="inline-block rtl:rotate-180">→</span>
          </span>
        </div>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-h-[92vh] overflow-y-auto rounded-sm border border-amber-700/30 bg-surface p-0 text-slate-900 sm:max-w-5xl"
      >
        <div className="grid md:grid-cols-[1.25fr_1fr]">
          <div className="flex items-center justify-center bg-slate-100 p-4 md:p-6">
            <OptimizedImage
              src={certificate.image}
              alt={item("title")}
              sizes="(min-width: 768px) 560px, 100vw"
              className="h-auto max-h-[80vh] w-auto max-w-full rounded-sm shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-5 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <DialogTitle className="font-serif text-[28px] leading-tight font-bold text-slate-900">
                  {item("title")}
                </DialogTitle>
                <DialogDescription className="font-sans text-sm leading-relaxed text-slate-600">
                  {item("subtitle")}
                </DialogDescription>
              </div>

              <DialogClose
                aria-label={t("close")}
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-slate-900 transition hover:border-amber-700 hover:text-amber-700"
              >
                <X className="size-4" aria-hidden />
              </DialogClose>
            </div>

            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 border-y border-slate-200 py-5 font-sans text-[13px] leading-normal">
              {details.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="font-semibold text-slate-500">{label}</dt>
                  <dd className="text-slate-900">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-[11px] font-bold tracking-[0.08em] text-amber-700 uppercase">
                {t("fields.scope")}
              </span>
              <p className="font-sans text-sm leading-relaxed text-slate-600">
                {item("scope")}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <DialogClose className="rounded-sm border-[1.5px] border-slate-900 px-5 py-3 font-sans text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-page">
                {t("close")}
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
