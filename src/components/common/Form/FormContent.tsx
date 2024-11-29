import React, { ReactNode } from "react";

interface FormContentProps {
  children: ReactNode;
}

export function FormContent({ children }: FormContentProps) {
  return (
    <section className="flex  justify-center text-sm font-light flex-col items-left">
      {children}
    </section>
  );
}
