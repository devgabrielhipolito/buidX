import { dados } from "../../../mocks/Dashboard/data";
import { months } from "../../../utils/calender/CalenderDays";
import { currentMonth } from "../../../utils/calender/currentDate";
import { arrayDate } from "../../../utils/grafico/lengthProduction";

const Grafico = () => {
  return (
    <section className="flex flex-wrap items-end flex-grow justify-around gap-4">
      {months.map((month) => {
        const dado = arrayDate.find(
          (data) => data.mes === month.substring(0, 3)
        );
        const quantidade = dado ? dado.quantidade : 0;
        const date =
          dado?.date.substring(0, 2) === (currentMonth + 1).toString();
        return (
          <div
            key={month}
            className="flex flex-col justify-center items-center"
          >
            <div
              style={{
                height: `${quantidade || 5}px`,
                background: `${date ? "#2A5FE5" : "#2A2A2A"}`,
              }}
              className="bg-gray-600  w-[34px] rounded-lg"
            ></div>
            <p className="text-gray-300 text-sm">{month.substring(0, 3)}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Grafico;
