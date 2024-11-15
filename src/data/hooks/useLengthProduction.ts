import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../redux/reducers";
import { months } from "../../utils/calender/CalenderDays";

const useLengthProduction = () => {
  const carItems = useSelector((state: rootState) => state.production.car);
  const arrayDate: Array<TDataProduction> = [];
  const regex = /^(?:0?(\d{1,2}))/;

  interface TDataProduction {
    mes: string;
    quantidade: number;
    date: string;
  }

  const countOccurrences = carItems.reduce((acc, { criado }) => {
    const monthNumber = criado.substring(3, 10);
    if (monthNumber in acc) {
      acc[monthNumber] += 1;
    } else {
      acc[monthNumber] = 1;
    }
    return acc;
  }, {} as Record<string, number>);

  Object.keys(countOccurrences).map((criado) => {
    const match = criado.match(regex);
    if (match) {
      const monthIndex = parseInt(match[1]) - 1;
      const arrayData: TDataProduction = {
        mes: months[monthIndex].substring(0, 3),
        quantidade: countOccurrences[criado],
        date: criado,
      };
      arrayDate.push(arrayData);
    }
  });

  const lengthProduction = arrayDate.reduce(
    (acc, { quantidade }) => acc + quantidade,
    0
  );
  return {
    arrayDate,
    lengthProduction,
  };
};

export default useLengthProduction;
