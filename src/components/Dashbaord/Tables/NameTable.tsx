import React, { FC } from "react";
import { tables } from "../../../utils/tables/tablesHelper";

const NameTable = () => {
  return (
    <tr className="bg-[#2B2B2B] flex  justify-between p-2 rounded-lg text-gray font-light m-5 text-sm ">
      {tables.map((item) => (
        <th className="w-[10%] font-normal text-center  " key={item}>
          {item}
        </th>
      ))}
    </tr>
  );
};

export default NameTable;
