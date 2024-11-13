import currentDate from "../../utils/calender/currentDate";

type TDados = {
  quantidade: number;
  mes: string;
  date: string;
};

export const dados: TDados[] = [
  {
    quantidade: 150,
    mes: "Out",
    date: "20/10/2024",
  },

  {
    quantidade: 120,
    mes: "Fev",
    date: "20/02/2024",
  },
  {
    quantidade: 50,
    mes: "Mar",
    date: "13/03/2024",
  },

  {
    quantidade: 50,
    mes: "Nov",
    date: "13/11/2024",
  },
];

export const carItems = [
  {
    id: 390,
    marca: "bmw",
    modelo: "x7",
    equipe: "Joao Souza",
    inicio: "07/06/2024",
    entrega: "08/07/2024",
    duracao: "14:20",
    status: "produção",
  },
  {
    id: 391,
    marca: "audi",
    modelo: "q8",
    equipe: "Maria Oliveira",
    inicio: "10/06/2024",
    entrega: "11/07/2024",
    duracao: "13:45",
    status: "finalizado",
  },
  {
    id: 392,
    marca: "mercedes",
    modelo: "gle",
    equipe: "Carlos Pereira",
    inicio: "12/06/2024",
    entrega: "13/07/2024",
    duracao: "15:00",
    status: "cancelado",
  },
  {
    id: 393,
    marca: "volkswagen",
    modelo: "tiguan",
    equipe: "Ana Santos",
    inicio: "14/06/2024",
    entrega: "15/07/2024",
    duracao: "16:10",
    status: "produção",
  },
];
