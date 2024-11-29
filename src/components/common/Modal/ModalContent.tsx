import React, { ReactNode } from "react";

interface ModalRootProps {
  children: ReactNode;
}

export default function ModalContent({ children }: ModalRootProps) {
  return (
    <section
      className="absolute mt-10 bg-gray-500  p-2 rounded-md
      h-[500px] 
      w-[500px]
      inset-0
      m-auto
      flex-col
      "
    >
      {children}
    </section>
  );
}
