import React from "react";
import { DaysWeek } from "../../../../utils/calender/CalenderDays";

const Days = () => {
  return (
    <div className="days grid grid-cols-7 gap-4  text-center text-gray-400 mt-2 ">
      {DaysWeek.map((day, index) => {
        return (
          <p key={day} className="font-normal w-9 text-sm text-white">
            {day}
          </p>
        );
      })}
    </div>
  );
};

export default Days;
