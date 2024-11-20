import React, { FC } from "react";

const TableName: FC<{
  tables: Array<string>;
  handleFilter: (e: any) => void;
}> = ({ tables, handleFilter }) => {
  return (
    <tr className="bg-[#2B2B2B] flex  justify-between p-2 rounded-lg text-gray font-light m-2 text-sm ">
      {tables.map((item) => (
        <th className="w-[10%] font-normal text-center  " key={item}>
          <button onClick={() => handleFilter(item)}>{item}</button>
        </th>
      ))}
      <th className="w-[10%] font-normal text-center ">Actions</th>
    </tr>
  );
};

export default TableName;
