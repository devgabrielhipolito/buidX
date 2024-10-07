import React, { memo } from "react";

interface IPropsInput {
  type: string;
  placeholder: string;
}

const Input: React.FC<IPropsInput> = ({ type, placeholder }) => {
  return (
    <input
      className={`w-full h-12 rounded-md  focus:border-black   focus:ring-0`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default memo(Input);
