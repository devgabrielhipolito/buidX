import React from "react";

interface TableDataProps {
  item: any[];
  tables: any[];
}

export function TableData({ item, tables }: TableDataProps) {
  if (item.length >= 1)
    return (
      <tbody className=" ">
        {item.map((data) => (
          <tr className="bg-white text-slate-950 flex justify-between p-2 rounded-lg text-gray m-2 text-[13px]">
            {tables.map((colunm, colIndex) => (
              <td className="w-[10%] text-center">{data[colunm]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );

  return (
    <p className="text-gray text-center mt-10">Nenhum dado para mostrar</p>
  );
}
