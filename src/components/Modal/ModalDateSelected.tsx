import React, { FC } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../data/redux/reducers";
import GenericsTable from "../Generics/Table/GenericsTable";
import { CarTables } from "../../utils/tables/tablesHelper";
import { ModalProps } from "../../types/modalPropsTypes";
import ModalEditProduction from "./ModalEditProduction";

const ModalDateSelected: FC<ModalProps> = ({ value, setModal }) => {
  const carItem = useSelector((state: rootState) => state.production.car);
  const data = carItem.filter(({ prazo }) => prazo === value);
  console.log(value);
  return (
    <section className="absolute w-full top-0 left-0 h-[550px] top-10 rounded-md bg-gray-500">
      <div className="flex  justify-between">
        <div className="flex justify-center items-center">
          <p className="m-2 text-white ">Prazos de produção por data</p>
          {value ? (
            <p className="text-white font-light">{JSON.stringify(value)}</p>
          ) : (
            <p>vazio</p>
          )}
        </div>
        <button
          onClick={() => setModal({ modal: false, value })}
          className="m-2"
        >
          X
        </button>
      </div>
      {
        <GenericsTable
          ModalElement={ModalEditProduction}
          tables={CarTables}
          data={data}
        />
      }
    </section>
  );
};

export default ModalDateSelected;
