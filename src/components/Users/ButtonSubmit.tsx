import React, { FC } from "react";

interface buttonProps {
  onSubmit: () => void;
  deleteUser: () => void;
}

const ButtonSubmit: FC<buttonProps> = ({ onSubmit, deleteUser }) => {
  return (
    <div className=" w-full flex  ">
      <button
        className="bg-green-600 text-sm w-[100px]text-center p-2 
      mt-5 rounded-lg m-auto font-semibold text-gray"
        onClick={onSubmit}
      >
        Criar usuário
      </button>

      <button
        className="text-gray text-sm w-[100px]text-center p-2 
      mt-5 rounded-lg mx-auto font-semibold bg-red-600"
        onClick={deleteUser}
      >
        Deletar usuario
      </button>
    </div>
  );
};

export default ButtonSubmit;
