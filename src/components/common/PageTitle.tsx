import type { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
  align?: "start" | "center";
};

export default function PageTitle({
  children,
  align = "start",
}: PageTitleProps) {
  return (
    <h1
      className={`font-serif text-6xl font-extrabold leading-[1.05] tracking-[-0.01em] ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </h1>
  );
}
