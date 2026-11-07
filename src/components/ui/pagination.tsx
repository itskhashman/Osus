import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * shadcn/ui Pagination, styled with the site's theme tokens. Page links are
 * buttons because paging here is client state, not separate URLs. Chevrons
 * flip in RTL.
 */
function Pagination({ className, ...props }: ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row flex-wrap items-center gap-1.5", className)}
      {...props}
    />
  );
}

function PaginationItem(props: ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = ComponentProps<"button"> & {
  isActive?: boolean;
};

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-sm border px-3 font-sans text-[13px] font-bold transition outline-none focus-visible:ring-2 focus-visible:ring-amber-700 disabled:pointer-events-none disabled:opacity-40",
        isActive
          ? "border-slate-900 bg-slate-900 text-page"
          : "border-transparent text-slate-900 hover:border-line-strong hover:bg-slate-100",
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  children,
  ...props
}: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      data-slot="pagination-previous"
      className={cn("px-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon className="size-4 rtl:rotate-180" aria-hidden />
      <span className="hidden sm:block">{children}</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  children,
  ...props
}: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      data-slot="pagination-next"
      className={cn("px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{children}</span>
      <ChevronRightIcon className="size-4 rtl:rotate-180" aria-hidden />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  label,
  ...props
}: ComponentProps<"span"> & { label: string }) {
  return (
    <span
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-9 items-center justify-center text-slate-500",
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
