import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface NavButtonProps extends ComponentProps<"button"> {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export default function NavButton({ label, icon, disabled,isActive, ...props }: NavButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isActive}
      className={cn(
        'w-full flex flex-col gap-2 items-center font-medium justify-center relative text-sm',
        isActive && 'text-primary after:content-[""] after:block after:absolute after:h-[2px] after:bg-current after:w-[12px] after:left-1/2 after:-translate-x-1/2 after:bottom-4',
        disabled && 'text-gray-700'
      )}
    >
      <div className="w-[24px] h-[24px]">
        {icon}
      </div>
      <div>
        {label}
      </div>
    </button>
  )
}
