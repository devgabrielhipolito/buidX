import {  ReactElement } from "react";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();

const daysInMonth = (): number => {
  return new Date(currentYear, currentMonth + 1, 0).getDate();
};

const firstDay = (): number => {
  return new Date(currentYear, currentMonth, 1).getDay();
};

const daysLastMonth = (): number => {
  return new Date(currentYear - 1, currentMonth + 1, 0).getDate();
};

const prevMonthDays: number[] = Array.from({ length: firstDay() }, (_, i) => {
  return daysLastMonth() - firstDay() + i + 1;
});

const totalDayShow: number = prevMonthDays.length + daysInMonth();
const nextMonthDays = Array.from(
  { length: 42 - totalDayShow },
  (_, i) => i + 1
);

const dataarray = [
  ...prevMonthDays.map((day) => ({ day, type: "prevMonthDays" as const })),
  ...Array.from({ length: daysInMonth() }, (_, i) => ({
    day: i + 1,
    type: currentDay ? "previous" : ("current" as const),
  })),
  ...nextMonthDays.map((day) => ({ day, type: "nextMonthDays" as const })),
];





export const renderCalender = () => {
  const mappedDates = [] as ReactElement[];

  dataarray.forEach(({ day, type }) => {
    if (currentDay === day && currentMonth) {
      mappedDates.push(<p className="w-9 text-blue-600 ">{day}</p>);
    } else if (currentDay > day) {
      mappedDates.push(<p className="w-9  text-sm  text-gray">{day}</p>);
    } else if (type === "nextMonthDays" || type === "prevMonthDays") {
      mappedDates.push(<p className="w-9  text-gray ">{day}</p>);
    } else if (type === "previous") {
      mappedDates.push(<p className="w-9 text-white  ">{day}</p>);
    }
  });

  return mappedDates.flat();
};
