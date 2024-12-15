import React, { CSSProperties, HtmlHTMLAttributes, ReactNode } from "react";

interface ModalRootProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export default function ModalContent({
  style,
  children,
  ...rest
}: ModalRootProps) {
  return (
    <section
      {...rest}
      style={style}
      className="absolute mt-10 bg-gray-500  p-2 rounded-md
      h-[500px] 
      w-[500px]
      inset-0
      m-auto
      flex
      flex-col
      "
    >
      {children}
    </section>
  );
}
