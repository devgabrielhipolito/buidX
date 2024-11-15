import { useState } from "react";

import {
  date,
  getDaysCurrentMonth,
  getFirstDayWeek,
  getPreviousMonth,
  today,
} from "../../utils/calender/datesHelper";
import { months } from "../../utils/calender/CalenderDays";
import { fixDateNumber } from "../../utils/calender/fixDateNumber";

const useControllerCalender = () => {
  const [currentDate, setCurrentDate] = useState(date.add(0, "month"));
  const monthSelected = months[currentDate.month()];

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
      ...prevLastMonth.map((day) => ({
        day,
        type: "prevLastMonth",
        datafull: fixDateNumber(day, currentDate.month(), currentDate.year()),
        
      })),
      ...currentMonthDays.map((day) => ({
        day,
        type: day === today ? "currentDay" : "previous",
        datafull: fixDateNumber(
          day,
          currentDate.month() + 1,
          currentDate.year()
        ),
      })),
      ...nextDaysMonth.map((day) => ({
        day,
        type: "nextDaysMonth",
        datafull: fixDateNumber(
          day,
          currentDate.month() + 2,
          currentDate.year()
        ),
      })),
    ];
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const previouMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  return {
    gerenateCalender,
    nextMonth,
    previouMonth,
    monthSelected,
    currentDate,
  };
};

export default useControllerCalender;
