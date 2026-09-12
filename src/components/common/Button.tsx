"use client";

import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

const variants = {
  primary: "bg-amber-700 hover:bg-amber-800 hover:!text-white",
  outline:
    "border-[1.5px] border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:!text-white",
  dark: "bg-slate-900 !text-white hover:bg-slate-800 hover:!text-amber-700",
  ghost: "",
};

const base =
  "inline-block rounded-sm font-sans text-sm font-bold tracking-[0.02em] transition";

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${
    variant === "ghost" ? "" : "px-7 py-4"
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
