import React, { ReactNode } from "react";

interface NavBarHeaderProps {
  children: ReactNode;
}

export function NavBarHeader({ children }: NavBarHeaderProps) {
  return <nav className="flex justify-between mb-5">{children}</nav>;
}
