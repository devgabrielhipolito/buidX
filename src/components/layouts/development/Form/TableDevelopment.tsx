import React from "react";
import GenericsTable from "../../Generics/Table/GenericsTable";
import { useSelector } from "react-redux";
import { rootState } from "../../../data/redux/reducers";
import { CarTables } from "../../../utils/tables/tablesHelper";

const TableDevelopment = () => {
  const carItems = useSelector((state: rootState) => state.production.car);
  return (
    <section>
      <GenericsTable tables={CarTables} data={carItems} />
    </section>
  );
};

export default TableDevelopment;
