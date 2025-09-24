import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  ghost?: boolean;
}

export default function Button({ className, ghost, isLoading, disabled, children, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={ disabled || isLoading }
      className={cn(
        'bg-primary text-white rounded-[44px] px-7 py-3.5 font-semibold text-lg cursor-pointer',
        ghost && 'bg-gray-300',
        className
      )}
    >
      {!isLoading && children}
    </button>
  )
}
