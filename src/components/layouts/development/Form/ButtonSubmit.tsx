import React, { FC } from "react";

interface IButtonSubmit {
  onSubmit: () => void;
  setModal: React.Dispatch<boolean>;
}

const ButtonSubmit: FC<IButtonSubmit> = ({ onSubmit, setModal }) => {
  return (
    <div className="flex justify-center gap-4 ">
      <button
        className="p-2 mt-20  bg-white w-[100px] rounded-md hover:bg-slate-300 font-semibold"
        onClick={onSubmit}
      >
        Começar
      </button>

      <button
        onClick={() => setModal(false)}
        className="p-2 mt-20 w-[100px] text-red-600 rounded-md  font-semibold"
      >
        Cancelar
      </button>
    </div>
  );
};

export default ButtonSubmit;
