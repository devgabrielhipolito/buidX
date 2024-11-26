import { ReactNode } from "react";

interface NavBarLinksProps {
  links: () => (JSX.Element | null)[];
}

export function NavbarLinks({ links }: NavBarLinksProps) {
  return <ul className="flex flex-col justify-between gap-12 w-[220px] ">{links()}</ul>;
}
