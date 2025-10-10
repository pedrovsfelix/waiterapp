import { forwardRef, type ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Info } from "../icons";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
  className?: string;
}

export default forwardRef<HTMLInputElement, InputProps>(
  function Input({ placeholder, name, id, error, className, ...props }, ref) {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            'w-full bg-white rounded-lg border border-gray-300 px-4 h-[56px] text-gray-500 pt-4 peer placeholder-shown:pt-0 focus:border-gray-700 transition-all outline-none caret-primary',
            error && '!border-primary',
            className
          )}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="absolute text-xs left-[13px] top-2 text-gray-700 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex items-center gap-2 mt-2 text-primary">
            <Info className="w-[15px] h-[15px]" />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
