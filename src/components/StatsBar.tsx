"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";

function YearsCounter({ value }: { value: string }) {
  const numberMatch = value.match(/\d+/);
  const target = numberMatch ? Number(numberMatch[0]) : 0;
  const numberStart = numberMatch?.index ?? 0;
  const prefix = value.slice(0, numberStart);
  const suffix = value.slice(numberStart + (numberMatch?.[0].length ?? 0));
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const startTime = performance.now();
    const duration = 4500;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easedProgress));

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return `${prefix}${count}${suffix}`;
}

export default function StatsBar() {
  const { t } = useLocale();

  return (
    <section className="bg-slate-900 px-8 py-9">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {t.stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-[38px] font-extrabold text-amber-700">
              {/years|سنوات/i.test(stat.label) ? (
                <YearsCounter value={stat.value} />
              ) : (
                stat.value
              )}
            </div>

            <div className="mt-1.5 font-sans text-xs font-semibold tracking-wider text-slate-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
