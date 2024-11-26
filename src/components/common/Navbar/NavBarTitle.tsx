import React from "react";

interface NavBarTitleProps {
  text: string;
}

export function NavBarTitle({ text }: NavBarTitleProps) {
  return <p className="text-2xl text-white">{text}</p>;
}
