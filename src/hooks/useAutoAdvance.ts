"use client";

import { useEffect } from "react";

type Advanceable = { scrollNext: () => void };

export function useAutoAdvance(
  api: Advanceable | undefined,
  intervalMs: number,
) {
  useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [api, intervalMs]);
}
