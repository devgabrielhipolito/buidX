import React, { HtmlHTMLAttributes, ReactNode } from "react";

interface FormContentProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function FormContent({ children, ...rest }: FormContentProps) {
  return (
    <section
      {...rest}
      className="flex justify-between text-sm font-light flex-col "
    >
      {children}
    </section>
  );
}
