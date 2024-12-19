import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-stone-200 tw-bg-white tw-px-3 tw-py-2 tw-text-base tw-ring-offset-white file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium file:tw-text-stone-950 placeholder:tw-text-stone-500 focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-stone-950 focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 md:tw-text-sm dark:tw-border-stone-800 dark:tw-bg-stone-950 dark:tw-ring-offset-stone-950 dark:file:tw-text-stone-50 dark:placeholder:tw-text-stone-400 dark:focus-visible:tw-ring-stone-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
