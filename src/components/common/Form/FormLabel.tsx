import { ReactNode } from "react";

interface FormLabelProps {
  children: ReactNode;
  text: string;
}
export function FormLabel({ children, text }: FormLabelProps) {
  return (
    <label>
      {text}
      {children}
    </label>
  );
}
