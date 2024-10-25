import React from "react";
import NameTable from "./NameTable";

const Table = () => {
  return (
    <section className="rounded-md bg-gray-100 w-full h-64">
      <table className="w-full">
        <NameTable />
      </table>
    </section>
  );
};

export default Table;
