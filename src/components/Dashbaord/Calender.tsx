import useControllerCalender from "../../data/hooks/useControllerCalender";
import CalenderHeader from "./Calender/CalenderHeader";
import Days from "./Calender/Days";

const Calender = () => {
  // fazer verificacao das datas do datarray para o o componente Dates
  //renderCalender retirado
  const { dataarray } = useControllerCalender();
  console.log(dataarray);
  return (
    <div className="rounded-md grid  flex-col p-2 w-[400px] h-[300px]">
      <CalenderHeader />
      <Days />
      <div className="grid grid-cols-7 gap-4 p-2  text-center font-light justify-around w-full  ">
        {/* {renderCalender()} */}
      </div>
    </div>
  );
};

export default Calender;
