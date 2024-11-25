import React, { FC } from "react";

interface props {
  textButton: string;
  setModal?: React.Dispatch<boolean> | null;
}

const Button: FC<props> = ({ textButton, setModal }) => {
  return (
    <button
      onClick={() => setModal && setModal(true)}
      className="bg-white p-2 font-semibold rounded-md text-sm"
    >
      {textButton}
    </button>
  );
};

export default Button;
