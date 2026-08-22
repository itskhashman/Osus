'use client';

import Link from 'next/link';

const variants = {
  primary: 'bg-amber-700 text-slate-900 hover:bg-amber-800',
  outline:
    'border-[1.5px] border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-black',
  dark: 'bg-slate-900 text-white hover:bg-slate-800',
};

const base =
  'inline-block rounded-sm font-sans text-sm font-bold tracking-[0.02em] transition';

export default function Button({
  href,
  variant = 'primary',
  children,
  onClick,
  className = '',
}) {
  const classes = `${base} ${variants[variant]} ${
    variant === 'ghost' ? '' : 'px-7 py-4'
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}