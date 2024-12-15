import React, { InputHTMLAttributes, forwardRef } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ value, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        value={value}
        className="bg-black mt-1 placeholder:font-normal text-sm h-[40px] border-black rounded-md text-white"
      />
    );
  }
);

export default FormInput;
