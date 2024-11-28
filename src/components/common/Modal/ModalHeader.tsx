import { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
}

export function ModalHeader({ children }: ModalHeaderProps) {
  return <header className="flex justify-between">{children}</header>;
}
