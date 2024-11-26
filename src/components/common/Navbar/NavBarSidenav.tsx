import React, { ReactNode } from "react";

interface NavBarSidenavProps {
  children: ReactNode;
}

export function NavBarSidenav({ children }: NavBarSidenavProps) {
  return (
    <nav className="h-full fixed flex justify-center w-[20%]">
      <div className="flex justify-around flex-col h-full">{children}</div>
    </nav>
  );
}
