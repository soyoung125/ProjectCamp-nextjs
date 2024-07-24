import { twMerge } from "tailwind-merge";

type TInputProps = React.ComponentPropsWithoutRef<"input">;

const CustomInput = ({ className, ...rest }: TInputProps) => {
  return (
    <>
      <input
        className={twMerge(
          "w-60 h-11 rounded-lg border border-[#4f4f4f] px-4 py-[13.5px] placeholder:text-[#ACACAC] text-sm outline-none",
          className
        )}
        {...rest}
      />
    </>
  );
};
export default CustomInput;
