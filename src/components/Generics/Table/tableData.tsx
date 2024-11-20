import React, { FC } from "react";
import { CarObject } from "../../../data/types/productionTypes";
import EditIcon from "../../../assets/imgs/LinksIcons/EditIcon";

const TableData: FC<{
  item: any[];
  tables: Array<string>;
  setModal: React.Dispatch<{
    value: any[];
    modal: boolean;
  }>;
}> = ({ item, setModal, tables }) => {
  if (item.length >= 1)
    return (
      <tbody className=" ">
        {item.map((data) => (
          <tr className="bg-white text-slate-950 flex justify-between p-2 rounded-lg text-gray m-2 text-[13px]">
            {tables.map((colunm, colIndex) => (
              <td className="w-[10%] text-center">{data[colunm]}</td>
            ))}

            <button
              onClick={() =>
                setModal({
                  value: data,
                  modal: true,
                })
              }
              className="w-[10%] text-center"
            >
              <EditIcon />
            </button>
          </tr>
        ))}
      </tbody>
    );

  return <p className="text-gray text-center mt-10">Nenhum dado para mostrar</p>;
};

export default TableData;
