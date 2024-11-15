import React from "react";
import GenericsTable from "../../Generics/Table/GenericsTable";
import { useSelector } from "react-redux";
import { rootState } from "../../../data/redux/reducers";

const TableDevelopment = () => {
  const carItems = useSelector((state: rootState) => state.production.car);
  return (
    <section>
      <GenericsTable data={carItems} />
    </section>
  );
};

export default TableDevelopment;
