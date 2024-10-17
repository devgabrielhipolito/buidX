import React from "react";
import { Days, months } from "../utils/Days";
import { array } from "yup";

const Calender = () => {
  const date = new Date();

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const daysInMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const firstDay = () => {
    return new Date(currentYear, currentMonth + 1).getDay();
  };

  const daysLastMonth = () => {
    return new Date(currentYear - 1, currentMonth + 1, 0).getDate();
  };

  const prevMonthDays = Array.from({ length: firstDay() }, (_, i) => {
    return daysLastMonth() - firstDay() + i + 1;
  });

  const totalDayShow = prevMonthDays.length - daysInMonth();
  const nextMonthDays = Array.from(
    { length: 42 - totalDayShow },
    (_, i) => i + 1
  );
  const dataarray = [
    ...prevMonthDays,
    ...Array.from({ length: daysInMonth() }, (_, i) => i + 1),
    ...nextMonthDays,
  ];

  return (
    <div className="rounded-md flex  flex-col p-2 bg-gray-300 w-[450px] h-[300px] ">
      <div className="flex text-white justify-around   w-full">
        <button> {"<"} </button>
        <p>Marco</p>
        <button> {">"} </button>
      </div>
      <div className="flex justify-around">
        {Days.map((day) => (
          <p>{day}</p>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4 text-white justify-around w-full  flex-wrap  ">
        {dataarray.map((date) => (
          <p className="w-9">{date}</p>
        ))}
      </div>
    </div>
  );
};

export default Calender;
