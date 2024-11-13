import React, { FC } from "react";

interface IModal {
  date: {
    date: {} | null;
    modal: boolean;
  };
  setModal: React.Dispatch<{
    date: {} | null;
    modal: boolean;
  }>;
}

const ModalDateSelected: FC<IModal> = ({ date, setModal }) => {
  console.log(date);
  return (
    <section className="absolute w-full top-0 left-0 h-[500px] top-10 rounded-md bg-gray-500">
      <div className="flex  justify-between">
        <p className="m-2 text-white ">Prazos de produção por data</p>
        <button
          onClick={() => setModal({ modal: false, date })}
          className="m-2"
        >
          X
        </button>
      </div>
    </section>
  );
};

export default ModalDateSelected;
