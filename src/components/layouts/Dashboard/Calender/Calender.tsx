import { useState } from "react";
import useControllerCalender from "../../../../data/hooks/useControllerCalender";
import CalenderHeader from "./CalenderHeader";
import Dates from "./Dates";
import Days from "./Days";
import ModalDateSelected from "../../../Modal/ModalDateSelected";

const Calender = () => {
  const {
    gerenateCalender,
    nextMonth,
    previouMonth,
    monthSelected,
    currentDate,
  } = useControllerCalender();
  const [modalisOpen, setModalIsOpen] = useState<{
    value: {} | null;
    modal: boolean;
  }>({ value: {}, modal: false });

  return (
    <div className="rounded-md  grid flex-col p-1   h-[250px]">
      <CalenderHeader
        monthSelected={monthSelected}
        nextMonth={nextMonth}
        previousMonth={previouMonth}
      />
      <Days />
      <Dates
        setModal={setModalIsOpen}
        currentDate={currentDate}
        gerenateCalender={gerenateCalender()}
      />

      {modalisOpen.modal && (
        <ModalDateSelected
          key={"ModalDateSelected"}
          value={modalisOpen.value}
          setModal={setModalIsOpen}
        />
      )}
    </div>
  );
};

export default Calender;
