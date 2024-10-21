import currentDate from "../../utils/calender/currentDate";

type TDados = {
  quantidade: number;
  mes: string;
  date: string;
};

export const dados: TDados[] = [
  {
    quantidade: 150,
    mes: "Jan",
    date: currentDate(),
  },

  {
    quantidade: 0,
    mes: "Fev",
    date: currentDate(),
  },

  {
    quantidade: 0,
    mes: "Mar",
    date: currentDate(),
  },
];
