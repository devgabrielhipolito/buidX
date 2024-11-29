import React, { CSSProperties, HtmlHTMLAttributes, ReactNode } from "react";
interface TableContentProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
  style?: CSSProperties;
}
export function TableRoot({ style, children, ...rest }: TableContentProps) {
  return (
    <section
      {...rest}
      style={style}
      className="rounded-md flex flex-col h-[600px] overflow-auto"
    >
      {children}
    </section>
  );
}
