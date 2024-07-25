import React, { useId } from "react";

type TCheckboxProps = React.ComponentPropsWithoutRef<"input"> & {
  onToggle?: () => void;
};

const Checkbox = ({ children, onToggle, ...rest }: TCheckboxProps) => {
  const uuid = useId(); // 리액트가 고유한 아이디를 보장함.

  return (
    <div className="flex items-center gap-2 relative">
      <input
        type="checkbox"
        id={uuid}
        className="appearance-none w-5 h-5 border border-[#4F4F4F] rounded-[5px] bg-white checked:bg-[#4F4F4F] peer/agree"
        {...rest}
        onChange={onToggle}
      />

      <label htmlFor={uuid} className="font-bold inter text-[#4F4F4F] text-sm">
        {children}
      </label>

      <svg
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden peer-checked/agree:block absolute ml-[4px]"
        onClick={onToggle}
      >
        <path
          d="M11.7991 0.766681C11.7247 0.691716 11.6363 0.632214 11.5388 0.591609C11.4413 0.551003 11.3368 0.530098 11.2312 0.530098C11.1256 0.530098 11.0211 0.551003 10.9236 0.591609C10.8262 0.632214 10.7377 0.691716 10.6633 0.766681L4.70474 6.73328L2.20133 4.22187C2.12413 4.1473 2.033 4.08866 1.93314 4.0493C1.83328 4.00995 1.72664 3.99065 1.61932 3.99251C1.512 3.99436 1.4061 4.01734 1.30766 4.06013C1.20922 4.10291 1.12017 4.16467 1.0456 4.24186C0.971027 4.31906 0.91239 4.41019 0.873036 4.51006C0.833682 4.60992 0.814382 4.71655 0.816239 4.82387C0.818095 4.93119 0.841072 5.03709 0.883857 5.13553C0.926642 5.23397 0.988396 5.32302 1.0656 5.39759L4.13687 8.46887C4.21123 8.54384 4.29969 8.60334 4.39715 8.64394C4.49462 8.68455 4.59916 8.70545 4.70474 8.70545C4.81033 8.70545 4.91487 8.68455 5.01233 8.64394C5.10979 8.60334 5.19825 8.54384 5.27261 8.46887L11.7991 1.9424C11.8803 1.86751 11.945 1.77661 11.9894 1.67543C12.0337 1.57426 12.0566 1.465 12.0566 1.35454C12.0566 1.24409 12.0337 1.13483 11.9894 1.03365C11.945 0.932477 11.8803 0.841577 11.7991 0.766681V0.766681Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default Checkbox;
