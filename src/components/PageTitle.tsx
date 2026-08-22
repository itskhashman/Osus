import type { ReactNode } from 'react';

type PageTitleProps = {
  children: ReactNode;
  size?: number;
  align?: 'center' | string;
};

export default function PageTitle({ children, size = 180, align }: PageTitleProps) {
  return (
    <h1
      className={`font-serif font-extrabold text-6xl leading-[1.05] tracking-[-0.01em] ${
        align === 'center' ? 'text-center' : ''
      }`}
    >
      {children}
    </h1>
  );
}