import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import Sidenav from "../../Sidenav/Sidenav";

interface props {
  children?: ReactNode;
  background?: string;
  type?: "header" | "sidenav";
  isMobile?: boolean;
  modal?: React.Dispatch<boolean>;
  textButton?: string;
}

const NavBar: FC<props> = ({
  background,
  children,
  type,
  isMobile,
  modal,
  textButton,
}) => {
  return (
    <nav
      className={`
        flex
        ${type === "header" ? "justify-between " : ""} 
        ${
          type === "sidenav"
            ? " fixed md:flex h-screen flex-col justify-around w-[20%] box-border bg-gray-100 p-4"
            : ""
        } 

        `}
    >
      {children}
      {modal && (
        <button className="bg-white p-2 font-semibold rounded-md text-sm">
          {textButton}
        </button>
      )}
    </nav>
  );
};

export default NavBar;

//          `
