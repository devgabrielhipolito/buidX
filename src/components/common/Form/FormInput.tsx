import React, { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function FormInput({ placeholder, ...rest }: FormInputProps) {
  return (
    <input
      {...rest}
      className=' mt-1 bg-gray placeholder:font-normal text-sm  h-[40px] rounded-md text-black"'
    />
  );
}
