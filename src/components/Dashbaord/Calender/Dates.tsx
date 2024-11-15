import React, { FC, ReactElement } from "react";
import { today } from "../../../utils/calender/datesHelper";
import { Dayjs } from "dayjs";
import { currentDay, currentMonth } from "../../../utils/calender/currentDate";
import { useSelector } from "react-redux";
import { rootState } from "../../../data/redux/reducers";

interface IDatesProps {
  gerenateCalender: {
    day: number;
    type: string;
    datafull: string;
  }[];
  currentDate: Dayjs;
  setModal: React.Dispatch<{
    date: {} | null;
    modal: boolean;
  }>;
}

const Dates: FC<IDatesProps> = ({
  gerenateCalender,
  currentDate,
  setModal,
}) => {
  const listDate = useSelector((state: rootState) => state.production.car);

  const renderCalender = () => {
    const mappedDates = [] as ReactElement[];

    gerenateCalender.forEach(({ day, type, datafull }) => {
      const isCurrentMonth = currentDate.month() === currentMonth;
      const isPastDay = today > day;
      const deliveyDay = listDate.find(({ prazo }) => prazo === datafull);

      if (deliveyDay) {
        mappedDates.push(
          <button
            onClick={(e: any) => setModal({ date: datafull, modal: true })}
            className="w-9 key={day} text-orange-400  text-sm text-center hover:bg-black rounded-md "
          >
            {day}
          </button>
        );
      }

     else if (type === "currentDay" && isCurrentMonth) {
        mappedDates.push(
          <button
            onClick={(e: any) => setModal({ date: datafull, modal: true })}
            className="w-9 key={day} text-blue-600 text-sm text-center hover:bg-black rounded-md"
          >
            {day}
          </button>
        );
      } else if (isPastDay) {
        mappedDates.push(
          <button
            onClick={(e: any) => setModal({ date: datafull, modal: true })}
            className="w-9  text-sm  text-gray text-center hover:bg-black rounded-md"
          >
            {day}
          </button>
        );
      } else if (
        type === "nextMonthDays" ||
        type === "prevLastMonth" ||
        currentDate.month() != currentMonth
      ) {
        mappedDates.push(
          <button
            onClick={(e: any) => setModal({ date: datafull, modal: true })}
            className="w-9  text-gray text-sm text-center content-center hover:bg-black rounded-md "
          >
            {day}
          </button>
        );
      } else if (type === "previous") {
        mappedDates.push(
          <button
            onClick={(e: any) => setModal({ date: datafull, modal: true })}
            className="w-9 text-white font-medium text-center hover:bg-black rounded-md "
          >
            {day}
          </button>
        );
      }
    });
    console.log(mappedDates);
    return mappedDates.flat();
  };

  return (
    <div className="grid grid-cols-7 gap-4 text-center text-gray-400  ">
      {renderCalender()}
    </div>
  );
};

export default Dates;
