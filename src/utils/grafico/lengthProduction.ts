import { useSelector } from "react-redux";
import { rootState } from "../../data/redux/reducers";
import { store } from "../../data/redux/store/store";
import { months } from "../calender/CalenderDays";

const selectCar = (state: rootState) => state.production.car;
export const carItems = selectCar(store.getState());
const regex = /^(?:0?(\d{1,2}))/;

const countOccurrences = carItems.reduce((acc, { criado }) => {
  const monthNumber = criado.substring(3, 10);
  if (monthNumber in acc) {
    acc[monthNumber] += 1;
  } else {
    acc[monthNumber] = 1;
  }
  return acc;
}, {} as Record<string, number>);

interface TDataProduction {
  mes: string;
  quantidade: number;
  date: string;
}
export const arrayDate: Array<TDataProduction> = [];
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
