import { useSelector } from "react-redux";
import { rootState } from "../../../data/redux/reducers";
import NameTable from "./NameTable";
import TableItems from "./TableItems";
import GenericsTable from "../../Generics/Table/genericsTable";

const Table = () => {
  const carItems = useSelector((state: rootState) => state.production.car);

  return (
    <section className="rounded-md bg-gray-100 w-full h-64 overflow-auto">
      <GenericsTable data={carItems}/>
    </section>
  );
};

export default Table;
