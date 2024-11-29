import { ReactNode } from "react";

interface FormLabelProps {
  children: ReactNode;
  text: string;
}
export function FormLabel({ children, text }: FormLabelProps) {
  return (
    <label className=" w-[300px] flex flex-col mb-2 m-1 text-gray">
      {text}
      {children}
    </label>
  );
}
