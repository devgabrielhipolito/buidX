import React, { ReactNode } from "react";
interface TableContentProps {
  children: ReactNode;
}
export function TableRoot({ children }: TableContentProps) {
  return <section className="rounded-md flex flex-col h-[400px] overflow-auto">{children}</section>;
}
