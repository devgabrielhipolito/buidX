import React from "react";
import EditIcon from "../../../assets/imgs/LinksIcons/EditIcon";

interface TableDataProps {
  item: any[];
  excludeTables: string[] | string;
}

export function TableData({ item, excludeTables }: TableDataProps) {
  const tables = item.length > 0 ? Object.keys(item[0]) : [];
  console.log(tables);
  const teste = tables.filter((key) => !excludeTables.includes(key));
  console.log(item);
  if (item.length >= 1)
    return (
      <tbody className="  ">
        {item.map((data) => (
          <tr className=" bg-white flex justify-between p-2 rounded-lg text-black m-2 text-[13px]">
            {teste.map((colunm, colIndex) => (
              <td className="w-[10%] text-center">{data[colunm]}</td>
            ))}
            <button className="w-[10%] text-center"><EditIcon/></button>
          </tr>
        ))}
      </tbody>
    );

  return (
    <p className="text-gray text-center mt-10">Nenhum dado para mostrar</p>
  );
}
