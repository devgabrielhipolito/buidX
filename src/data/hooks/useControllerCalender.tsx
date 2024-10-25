import React, { ReactElement, useState } from "react";

import dayjs from "dayjs";
import {
  date,
  getDaysCurrentMonth,
  getFirstDayWeek,
  getPreviousMonth,
} from "../../utils/calender/datesHelper";
import { months } from "../../utils/calender/CalenderDays";

type TmappedDates = {
  day: number;
  type: string;
};

const useControllerCalender = () => {
  const [currentDate, setCurrentDate] = useState(date.add(0, "month"));
  const monthSelected = months[currentDate.month()];
  console.log(monthSelected, currentDate.month());
  
  const gerenateCalender = () => {
    const firstDayWeek = getFirstDayWeek(currentDate);
    const daysCurrentMonth = getDaysCurrentMonth(currentDate);
    const previousMonth = getPreviousMonth(currentDate);

    const prevLastMonth = Array.from(
      { length: firstDayWeek },
      (_, i) => previousMonth - firstDayWeek + i + 1
    );
    const currentMonthDays = Array.from(
      { length: daysCurrentMonth },
      (_, i) => i + 1
    );

    const totalDayShow = prevLastMonth.length + currentMonthDays.length;

    const nextDaysMonth = Array.from(
      {
        length: 42 - totalDayShow,
      },
      (_, i) => i + 1
    );

    return [
      ...prevLastMonth.map((day) => ({ day, type: "prevLastMonth" })),
      ...currentMonthDays.map((day) => ({
        day,
        type: "previous",
      })),
      ...nextDaysMonth.map((day) => ({ day, type: "nextDaysMonth" })),
    ];
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const previouMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  //   dataarray2.forEach(({ day, type }) => {
  //     if (today === day) {
  //       setMappedDates([
  //         ...mappedDates,
  //         <p className="w-9 text-blue-600 "> {day}</p>,
  //       ]);
  //     } else if (today > day) {
  //       setMappedDates([
  //         ...mappedDates,
  //         <p className="w-9  text-sm  text-gray">{day}</p>,
  //       ]);
  //     } else if (type === "nextMonthDays" || type === "prevLastMonth") {
  //       setMappedDates([
  //         ...mappedDates,
  //         <p className="w-9  text-gray ">{day}</p>,
  //       ]);
  //     } else if (type === "previous") {
  //       setMappedDates([
  //         ...mappedDates,
  //         <p className="w-9 text-white  ">{day}</p>,
  //       ]);
  //     }
  //   });
  // };

  return {
    gerenateCalender,
    nextMonth,
    previouMonth,
    monthSelected,
    currentDate,
  };
};

export default useControllerCalender;
