import React from "react";
import NameTable from "./NameTable";
import TableItems from "./TableItems";

const Table = () => {
  return (
    <section className="rounded-md bg-gray-100 w-full h-64 overflow-auto">
      <table className="w-full">
        <NameTable />
        <TableItems />
      </table>
    </section>
  );
};

export default Table;
