import React, { FC } from "react";
import { tables } from "../../../utils/tables/tablesHelper";

const NameTable = () => {
  return (
    <tr className="bg-[#2B2B2B] flex justify-around p-3 rounded-sm text-gray m-4 text-sm ">
      {tables.map((item) => (
        <td>{item}</td>
      ))}
    </tr>
  );
};

export default NameTable;
