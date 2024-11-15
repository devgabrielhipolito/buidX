import React, { useState } from "react";
import { CarObject } from "../types/productionTypes";
const useTableFilter = (data: CarObject[]) => {
  const [filterData, setFilterData] = useState<CarObject[]>();

  const filterBy = (value: string) => {
    switch (value) {
      case "Em produção":
        const inProduction = Array.from(data).sort(({ status }) => {
          if (status === "Em produção") return -1;
          return 0;
        });

        setFilterData(inProduction);
        break;

      case "Concluido":
        const completed = Array.from(data).sort(({ status }) => {
          if (status === "Concluido") return -1;
          return 0;
        });
        setFilterData(completed);
        break;
    }
  };
  return { filterBy, filterData };
};

export default useTableFilter;
