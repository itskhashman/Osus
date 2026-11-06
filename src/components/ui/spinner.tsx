import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { localImages } from "@/fixture/images";
import OptimizedImage from "@/components/common/OptimizedImage";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      size: {
        sm: "size-16",
        default: "size-28",
        lg: "size-40",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type SpinnerProps = ComponentProps<"div"> &
  VariantProps<typeof spinnerVariants> & {
    /** Accessible text announced to screen readers. */
    label: string;
  };

/** Company logo inside a rotating gold ring. */
function Spinner({ className, size, label, ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-slot="spinner"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    >
      {/* Static track + spinning gold arc */}
      <span className="absolute inset-0 rounded-full border-2 border-slate-200" />
      <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-700 border-r-amber-700 animate-spin motion-reduce:animate-[spin_2.5s_linear_infinite]" />

      {/* Light logo in dark mode, regular logo otherwise */}
      <OptimizedImage
        src={localImages.logo}
        alt=""
        placeholder="empty"
        sizes="128px"
        className="h-auto w-[72%] animate-pulse motion-reduce:animate-none dark:hidden"
      />
      <OptimizedImage
        src={localImages.logoLight}
        alt=""
        placeholder="empty"
        sizes="128px"
        className="hidden h-auto w-[72%] animate-pulse motion-reduce:animate-none dark:block"
      />

      <span className="sr-only">{label}</span>
    </div>
  );
}

export { Spinner, spinnerVariants };
