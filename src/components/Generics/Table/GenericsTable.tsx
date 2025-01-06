import { FC, useState } from "react";
import TableName from "./TableName";
import TableData from "./tableData";
import useTableFilter from "../../../data/hooks/useTableFilter";
import { ModalProps } from "../../../types/modalPropsTypes";

interface TableProps {
  data: any[];
  tables: string[];
  ModalElement: FC<ModalProps>;
}

const GenericsTable: FC<TableProps> = ({ data, tables, ModalElement }) => {
  const { filterBy, filterData: item } = useTableFilter(data);
  const [isModalOpen, setIsModalOpen] = useState<{
    value: any[] | null;
    modal: boolean;
  }>({ value: null, modal: false });

  const handleFilter = (item: string) => {
    filterBy(item);
  };

  return (
    <section className="rounded-md  w-full h-full ">
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
        <TableData
          tables={tables}
          setModal={setIsModalOpen}
          item={item ? item : data}
        />
      </table>

      {isModalOpen.modal && (
        <ModalElement data={isModalOpen.value} setData={setIsModalOpen} />
      )}
    </section>
  );
};

export default GenericsTable;
