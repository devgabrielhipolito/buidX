import React from "react";
import { DaysWeek } from "../../../utils/calender/CalenderDays";

const Days = () => {
  return (
    <div className="days grid grid-cols-7 p-2 text-center gap-4">
      {DaysWeek.map((day, index) => {
        return (
          <p key={day} className="font-normal text-white">
            {day}
          </p>
        );
      })}
    </div>
  );
};

export default Days;
