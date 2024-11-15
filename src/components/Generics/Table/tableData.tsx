import React, { FC } from "react";
import { CarObject } from "../../../data/types/productionTypes";
import EditIcon from "../../../assets/imgs/LinksIcons/EditIcon";

const TableData: FC<{
  item: CarObject[];
  setModal: React.Dispatch<{
    data: Pick<
      CarObject,
      "_id" | "marca" | "modelo" | "status" | "funcionario" | "supervisor"
    >;
    modal: boolean;
  }>;
}> = ({ item, setModal }) => {
  return (
    <tbody className=" ">
      {item.map(
        ({ _id, marca, modelo, supervisor, prazo, criado, status,funcionario }, date) => (
          <tr
            key={_id}
            className="bg-white text-slate-950 flex justify-between p-2 rounded-lg text-gray m-2 text-[13px]"
          >
            <td className="w-[10%]  text-center">{_id}</td>
            <td className="w-[10%]  text-center">{marca}</td>
            <td className="w-[10%]  text-center">{modelo}</td>
            <td className="w-[10%]  text-center">{supervisor}</td>
            <td className="w-[10%]  text-center">{prazo}</td>
            <td className="w-[10%]  text-center">{criado}</td>
            <td className="w-[10%]  text-center">{status}</td>
            <button
              onClick={() =>
                setModal({
                  data: { _id, marca, modelo, supervisor, status, funcionario },
                  modal: true,
                })
              }
              className="w-[10%] text-center"
            >
              <EditIcon />
            </button>
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableData;
