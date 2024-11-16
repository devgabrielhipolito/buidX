import React, {
  ButtonHTMLAttributes,
  FC,
  SyntheticEvent,
  useState,
} from "react";
import TableName from "./TableName";
import { tables } from "../../../utils/tables/tablesHelper";
import { CarObject } from "../../../data/types/productionTypes";
import TableData from "./tableData";
import useTableFilter from "../../../data/hooks/useTableFilter";
import EditProduction from "../../Modal/ModalEditProduction";

const GenericsTable: FC<{ data: CarObject[] }> = ({ data }) => {
  const { filterBy, filterData: item } = useTableFilter(data);
  const [isModalOpen, setIsModalOpen] = useState<{
    carItem: Pick<
      CarObject,
      "_id" | "marca" | "modelo" | "status" | "funcionario" | "supervisor"
    > | null;
    modal: boolean;
  }>({ carItem: null, modal: false });

  const handleFilter = (item: string) => {
    filterBy(item);
  };

  return (
    <section className="rounded-md  w-full h-64 overflow-auto">
      <div className="flex gap-4 m-2 items-center  mr-auto text-gray ">
        <span className="text-sm ">Filtrar:</span>
        <button
          onClick={() => handleFilter("Concluido")}
          className="hover:text-slate-300 font-semibold"
        >
          Concluido
        </button>
        <span>|</span>
        <button
          onClick={() => handleFilter("Em produção")}
          className="hover:text-slate-300 font-semibold"
        >
          Em produção
        </button>
      </div>

      <table className="w-full">
        <TableName handleFilter={handleFilter} tables={tables} />
        <TableData setModal={setIsModalOpen} item={item ? item : data} />
      </table>

      {isModalOpen.modal && (
        <EditProduction
          carItem={isModalOpen.carItem}
          setModal={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default GenericsTable;
