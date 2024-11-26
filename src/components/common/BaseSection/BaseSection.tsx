import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const BaseSection: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col relative justify-center flex gap-3 w-full">
      {children}
    </div>
  );
};

export default BaseSection;
