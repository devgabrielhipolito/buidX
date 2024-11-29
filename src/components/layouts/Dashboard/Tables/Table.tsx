import { useSelector } from "react-redux";
import { rootState } from "../../../../data/redux/reducers";
import NameTable from "./NameTable";
import TableItems from "./TableItems";
import GenericsTable from "../../../Generics/Table/GenericsTable";
import { CarTables } from "../../../../utils/tables/tablesHelper";
import ModalEditProduction from "../../../Modal/ModalEditProduction";

const Table = () => {
  const carItems = useSelector((state: rootState) => state.production.car);

  return (
    <section className="rounded-md bg-gray-100 w-full   h-[30vh]">
      <GenericsTable
        ModalElement={ModalEditProduction}
        tables={CarTables}
        data={carItems}
      />
    </section>
  );
};

export default Table;
