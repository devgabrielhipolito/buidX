import React, { memo } from "react";
import { months } from "../utils/calender/CalenderDays";
import currentDate from "../utils/calender/currentDate";
import { dados } from "../mocks/Dashboard/data";
import Calender from "../components/Dashbaord/Calender/Calender";
import Table from "../components/Dashbaord/Tables/Table";
import Grafico from "../components/Dashbaord/Grafico/productionBar";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import HeaderDashboard from "../components/Dashbaord/Grafico/ProductionHeader";
import NavBar from "../components/common/Navbar/NavBar";

const Dashboard = () => {
  console.log();
  return (
    <section className=" dashboard flex flex-col relative justify-center flex gap-3 w-full ">
      <NavBar type="header">
        <h1 className="text-2xl text-white">
          <span className="text-blue-600">Monitore</span> sua produtividade
        </h1>
      </NavBar>

      <div className=" flex flex-wrap flex-grow justify-around gap-4">
        <div className=" grafico flex-grow rounded-md flex flex-col  p-4 bg-gray-100 w-[550px] h-72">
          <h2 className="text-white text-lg w-full p-2">Grafico</h2>
          <HeaderDashboard />
          <Grafico />
        </div>

        <div className="rounded-md flex  flex-col p-2 bg-gray-100 w-[100%] lg:w-[400px] ">
          <Calender />
        </div>
      </div>

      <Table />
    </section>
  );
};

export default memo(Dashboard);
