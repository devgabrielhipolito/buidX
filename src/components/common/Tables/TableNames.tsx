import React from "react";

interface TableNamesProps {
  tables: string[];
}

export function TableNames({ tables }: TableNamesProps) {
  return (
    <tr className="bg-[#2B2B2B] flex  justify-between p-2 rounded-lg text-gray font-light m-2 text-sm ">
      {tables.map((item) => (
        <th className="w-[10%] font-normal text-center  " key={item}>
          {item}
        </th>
      ))}
      <th className="w-[10%] font-normal text-center ">Actions</th>
    </tr>
  );
}
