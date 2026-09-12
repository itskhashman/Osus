import type { CSSProperties, ReactNode } from "react";

const DEFAULT_PADDING = "64px 32px 100px";

type SectionProps = {
  children: ReactNode;
  background?: string;
  padding?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Section({
  children,
  background,
  padding = DEFAULT_PADDING,
  className = "",
  style,
}: SectionProps) {
  const isDefaultPadding = padding === DEFAULT_PADDING;

  return (
    <section
      className={`${isDefaultPadding ? "px-8 pb-25 pt-16" : ""} ${className}`}
      style={{
        ...(background ? { background } : {}),
        ...(isDefaultPadding ? {} : { padding }),
        ...style,
      }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
