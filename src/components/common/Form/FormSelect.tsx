import React, { ReactNode, SelectHTMLAttributes } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export function FormSelect({ children, ...rest }: FormSelectProps) {
  return (
    <select
      {...rest}
      className="w-full  mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
    >
      {children}
    </select>
  );
}
