import React, { FC, ReactElement } from "react";
import { generatePath } from "react-router-dom";
import { today } from "../../../utils/calender/datesHelper";
import { Dayjs } from "dayjs";
import { currentMonth } from "../../../utils/calender/currentDate";

interface IDatesProps {
  gerenateCalender: {
    day: number;
    type: string;
  }[];
  currentDate: Dayjs;
}

const Dates: FC<IDatesProps> = ({ gerenateCalender, currentDate }) => {
  const renderCalender = () => {
    const mappedDates = [] as ReactElement[];
    console.log(gerenateCalender);
    gerenateCalender.forEach(({ day, type }) => {
      if (today === day && currentDate.month() === currentMonth) {
        mappedDates.push(
          <p className="w-9 text-blue-600 font-medium">{day}</p>
        );
      } else if (today > day) {
        mappedDates.push(
          <button className="w-9  text-sm  text-gray">{day}</button>
        );
      } else if (type === "nextMonthDays" || type === "prevLastMonth" || currentDate.month() != currentMonth) {
        mappedDates.push(<p className="w-9  text-gray ">{day}</p>);
      } else if (type === "previous") {
        mappedDates.push(<p className="w-9 text-white font-medium  ">{day}</p>);
      }
    });

    return mappedDates.flat();
  };

  return (
    <div className="grid grid-cols-7 gap-4 p-2 text-center font-light justify-around w-full">
      {renderCalender()}
    </div>
  );
};

export default Dates;
