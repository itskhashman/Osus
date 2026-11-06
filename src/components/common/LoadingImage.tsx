"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import OptimizedImage, {
  type OptimizedImageProps,
} from "@/components/common/OptimizedImage";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

/** Cached images load almost instantly — wait before showing an indicator so it doesn't flash. */
const INDICATOR_DELAY_MS = 150;

type LoadingImageProps = Omit<OptimizedImageProps, "fill" | "className"> & {
  /** "spinner" (logo spinner) for photos; "pulse" (quiet skeleton) for many small images like logos. */
  indicator?: "spinner" | "pulse";
  /** Sizes and shapes the box the image fills, e.g. "h-56 w-full rounded-lg". */
  className?: string;
  /** Classes for the <img> itself, e.g. "object-cover". */
  imageClassName?: string;
};

/**
 * OptimizedImage that fills a sized box and shows a loading indicator over it
 * until the image has loaded (or failed).
 */
export default function LoadingImage({
  indicator = "spinner",
  className,
  imageClassName,
  onLoad,
  onError,
  ...props
}: LoadingImageProps) {
  const t = useTranslations("common");
  const [loaded, setLoaded] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const timer = setTimeout(() => setShowIndicator(true), INDICATOR_DELAY_MS);
    return () => clearTimeout(timer);
  }, [loaded]);

  const visible = showIndicator && !loaded;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <OptimizedImage
        {...props}
        fill
        className={imageClassName}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setLoaded(true);
          onError?.(event);
        }}
      />

      {visible && indicator === "spinner" && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface/60">
          <Spinner size="sm" label={t("loading")} />
        </div>
      )}

      {visible && indicator === "pulse" && (
        <div
          role="status"
          aria-label={t("loading")}
          className="absolute inset-0 animate-pulse rounded-sm bg-slate-100 motion-reduce:animate-none"
        />
      )}
    </div>
  );
}
