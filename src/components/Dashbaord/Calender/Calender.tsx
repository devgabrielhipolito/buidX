import useControllerCalender from "../../../data/hooks/useControllerCalender";
import CalenderHeader from "./CalenderHeader";
import Dates from "./Dates";
import Days from "./Days";

const Calender = () => {
  const {
    gerenateCalender,
    nextMonth,
    previouMonth,
    monthSelected,
    currentDate,
  } = useControllerCalender();
  
  return (
    <div className="rounded-md grid flex-grow flex-col p-2 max-md:w-[400px] h-[300px]">
      <CalenderHeader
        monthSelected={monthSelected}
        nextMonth={nextMonth}
        previousMonth={previouMonth}
      />
      <Days />
      <Dates currentDate={currentDate} gerenateCalender={gerenateCalender()} />
    </div>
  );
};

export default Calender;
