import React from "react";
import { months } from "../utils/calender/CalenderDays";
import currentDate from "../utils/calender/currentDate";
import { dados } from "../mocks/Dashboard/data";
import Calender from "../components/Dashbaord/Calender/Calender";
import Table from "../components/Dashbaord/Tables/Table";

const Dashboard = () => {
  return (
    <section className=" dashboard flex flex-col  flex-1 gap-5 w-full ">
      <h1 className="text-3xl text-white">
        <span className="text-blue-600">Monitore</span> sua produtividade
      </h1>

      <div className=" flex flex-wrap flex-grow justify-around gap-4">
        <div className=" grafico flex-grow rounded-md flex flex-col  p-4 bg-gray-100 w-[550px] h-72">
          <h2 className="text-white text-lg w-full p-2">Grafico</h2>
          <p className="text-3xl text-white ">
            12.500<span className="text-sm text-stone-600">/Produzidos</span>
          </p>

          <div className="flex w-full h-auto  mt-auto items-end justify-between ">
            {months.map((month) => {
              const dado = dados.find(
                (data) => data.mes === month.substring(0, 3)
              );
              const quantidade = dado ? dado.quantidade : 0;
              const date = dado?.date === currentDate();
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
                    className="bg-gray-600 w-full w-[34px] rounded-lg"
                  ></div>
                  <p className="text-gray-300 text-sm">
                    {month.substring(0, 3)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-md flex  flex-col p-2 bg-gray-100 ">
          <Calender />
        </div>
      </div>

      <Table />
    </section>
  );
};

export default Dashboard;
