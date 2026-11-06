"use client";

import { useTranslations } from "next-intl";
import { Spinner } from "@/components/ui/spinner";

/** Shown by Next.js while a page under [locale] is loading. */
export default function Loading() {
  const t = useTranslations("common");

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-page px-8">
      <Spinner size="lg" label={t("loading")} />
    </div>
  );
}
