import React, { useContext } from "react";
import EditIcon from "../../../assets/imgs/LinksIcons/EditIcon";
import { TableContext } from "../../../data/context/TableProvider";

interface TableDataProps {
  item: any[];
  excludeTables: string[] | string;
}

export function TableData({ item, excludeTables }: TableDataProps) {
  const { setValue, value } = useContext(TableContext);
  const tables = item.length > 0 ? Object.keys(item[0]) : [];
  const teste = tables.filter((key) => !excludeTables.includes(key));
  if (item.length >= 1)
    return (
      <tbody className="  ">
        {item.map((data) => (
          <tr className=" bg-white flex justify-between p-2 rounded-lg text-black m-2 text-[13px]">
            {teste.map((colunm, colIndex) => (
              <td className="w-[10%] text-center">{data[colunm]}</td>
            ))}
            <button
              className="w-[10%] text-center"
              onClick={() =>
                setValue({
                  value: {
                    ...data,
                    filterData: teste.reduce((acc, colunm) => {
                      acc[colunm] = data[colunm];
                      return acc;
                    }, {} as Record<string, any>),
                  },
                  modal: true,
                })
              }
            >
              <EditIcon />
            </button>
          </tr>
        ))}
      </tbody>
    );

  return (
    <p className="text-gray text-center mt-10">Nenhum dado para mostrar</p>
  );
}
