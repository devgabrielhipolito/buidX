import dayjs from "dayjs";
import React from "react";
const date = new Date();
export const currentYear = date.getFullYear();
export const currentMonth = date.getMonth() ;
export const currentDay = date.getDate();

export default function currentDate() {
  const date = dayjs().format("DD/MM/YYYY");
  return date;
}

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDay = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

export const getDaysLastMonth = (
  year: number,
  month: number,
  firstDay: number
) => {
  const lastMonthDays = new Date(year - 1, month + 1, 0).getDate();
  return Array.from(
    { length: firstDay },
    (_, i) => lastMonthDays - firstDay + 1
  );
};

// export const prevMonthDays: number[] = Array.from(
//   { length: firstDay() },
//   (_, i) => {
//     return daysLastMonth() - firstDay() + i + 1;
//   }
// );

// export const
