import React, { FC, useEffect } from "react";
import { CarObject } from "../types/productionTypes";
import { useQueryApi } from "./useQueryApi";
import { ActionsApi } from "../../types/useQueryApiTypes";
import { productionUpdate } from "../redux/actions";
import currentDate from "../../utils/calender/currentDate";

const useStatusUpdate = (carItems: CarObject[]) => {
  const { dispatchAction } = useQueryApi();

  const productionCompleted = () => {
    console.log("oi");
    carItems.forEach((item, index) => {
      if (currentDate() === item.prazo && item.status === "Em produção") {
        const data = {
          status: "Concluido",
          _id: item._id,
        };
        dispatchAction({ data, action: ActionsApi.productionUpdate });
      }

      return;
    });
  };

  return { productionCompleted };
};

export default useStatusUpdate;
