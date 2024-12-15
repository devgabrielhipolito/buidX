import { HtmlHTMLAttributes, ReactNode } from "react";

interface FormOptionProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function FormOption({ children, ...rest }: FormOptionProps) {
  return <option {...rest}>{children}</option>;
}
