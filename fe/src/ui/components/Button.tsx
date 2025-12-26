import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Loading } from "../icons";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  secondary?: boolean;
  ghost?: boolean;
  icon?: React.ReactNode;
}

export default function Button({ className, secondary, ghost, isLoading, disabled, icon, children, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={ disabled || isLoading }
      className={cn(
        'bg-primary text-white rounded-[44px] px-7 py-3.5 font-semibold text-[16px] cursor-pointer hover:bg-primary-light hover:text-primary outline-none',
        secondary && 'text-primary cursor-pointer bg-transparent hover:bg-transparent',
        ghost && 'bg-gray-300',
        isLoading && 'bg-gray-300 text-primary cursor-progress',
        className
      )}
    >
      {isLoading && (
        <div className="flex items-center justify-center">
          <Loading className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}
      {!isLoading && (
        <div className="flex items-center justify-center gap-2">
          {icon}
          {children}
        </div>
      )}
    </button>
  )
}
