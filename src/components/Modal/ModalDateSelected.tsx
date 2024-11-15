import React, { FC } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../data/redux/reducers";
import GenericsTable from "../Generics/Table/GenericsTable";

interface IModal {
  date: {} | null;
  setModal: React.Dispatch<{
    date: {} | null;
    modal: boolean;
  }>;
}

const ModalDateSelected: FC<IModal> = ({ date, setModal }) => {
  const carItem = useSelector((state: rootState) => state.production.car);
  const data = carItem.sort(({ status }) => status.localeCompare("concluido"));

  return (
    <section className="absolute w-full top-0 left-0 h-[550px] top-10 rounded-md bg-gray-500">
      <div className="flex  justify-between">
        <div className="flex justify-center items-center">
          <p className="m-2 text-white ">Prazos de produção por data</p>
          {date ? (
            <p className="text-white font-light">{JSON.stringify(date)}</p>
          ) : (
            <p>vazio</p>
          )}
        </div>
        <button
          onClick={() => setModal({ modal: false, date })}
          className="m-2"
        >
          X
        </button>
      </div>
      {<GenericsTable data={data} />}
    </section>
  );
};

export default ModalDateSelected;
