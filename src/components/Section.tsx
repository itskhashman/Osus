import type { CSSProperties, ReactNode } from 'react';

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
  padding = '64px 32px 100px',
  className = '',
  style,
}: SectionProps) {
  const isDefaultPadding = padding === '64px 32px 100px';

  return (
    <section
      className={`${
        isDefaultPadding ? 'px-8 pb-25 pt-16' : ''
      } ${className}`}
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