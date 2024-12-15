import React, {
  Children,
  forwardRef,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ children, ...rest }, ref) => {
    return (
      <select
        {...rest}
        ref={ref}
        className="bg-black mt-1 placeholder:font-normal text-sm h-[40px] border-black rounded-md text-white"
      >
        {children}
      </select>
    );
  }
);
