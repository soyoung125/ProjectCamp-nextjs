import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TInputProps = React.ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <>
        <input
          className={twMerge(
            "w-full h-11 rounded-lg border border-[#4f4f4f] px-4 py-[13.5px] placeholder:text-[#ACACAC] text-sm outline-none inter",
            className
          )}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);
export default Input;
