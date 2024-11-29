import React, { FC } from "react";

type TCalenderHeader = {
  nextMonth: () => void;
  previousMonth: () => void;
  monthSelected: string;
};

const CalenderHeader: FC<TCalenderHeader> = ({
  nextMonth,
  previousMonth,
  monthSelected,
}) => {
  return (
    <header className="flex text-white justify-around  w-full">
      <button onClick={previousMonth}> {"<"} </button>
      <p>{monthSelected}</p>
      <button onClick={nextMonth}> {">"} </button>
    </header>
  );
};

export default CalenderHeader;
