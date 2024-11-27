import React, { ReactNode } from "react";
interface TableContentProps {
  children: ReactNode;
}
export function TableRoot({ children }: TableContentProps) {
  return <section className="rounded-md  w-full h-full">{children}</section>;
}
