import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../../data/redux/reducers";
import useStatusUpdate from "../../../data/hooks/useStatusUpdate";
import currentDate from "../../../utils/calender/currentDate";

const TableItems = () => {
  const carItems = useSelector((state: rootState) => state.production.car);
  const { productionCompleted } = useStatusUpdate(carItems);
  useEffect(() => {
    productionCompleted();
  }, []);
  if (carItems)
    return (
      <tbody className=" ">
        {carItems.map(
          ({ _id, marca, modelo, supervisor, prazo, criado, status }) => (
            <tr
              key={_id}
              className="bg-white text-slate-950 flex justify-between p-2 rounded-lg text-gray m-5 text-[13px]"
            >
              <td className="w-[10%]  text-center">{_id}</td>
              <td className="w-[10%]  text-center">{marca}</td>
              <td className="w-[10%]  text-center">{modelo}</td>
              <td className="w-[10%]  text-center">{supervisor}</td>
              <td className="w-[10%]  text-center">{prazo}</td>
              <td className="w-[10%]  text-center">{criado}</td>
              <td className="w-[10%]  text-center">{status}</td>
              <button className="w-[10%] text-center">Action</button>
            </tr>
          )
        )}
      </tbody>
    );

  return <p>Vzio</p>;
};

export default TableItems;
