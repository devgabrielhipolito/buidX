import React, { memo } from "react";
import { months } from "../utils/calender/CalenderDays";
import currentDate from "../utils/calender/currentDate";
import { dados } from "../mocks/Dashboard/data";
import Calender from "../components/layouts/Dashboard/Calender/Calender";
import Grafico from "../components/layouts/Dashboard/Grafico/productionBar";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import HeaderDashboard from "../components/layouts/Dashboard/Grafico/ProductionHeader";
import BaseSection from "../components/common/BaseSection/BaseSection";
import { NavBar } from "../components/common/Navbar";
import { Table } from "../components/common/Tables";
import { CarTables } from "../utils/tables/tablesHelper";

const Dashboard = () => {
  const carItem = useSelector((state: rootState) => state.production.car);

  return (
    <BaseSection>
      <NavBar.Header>
        <NavBar.Titile text="Monitore sua produtivdade" />
      </NavBar.Header>

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
      <Table.Root style={{ height: "250px" }}>
        <Table.Name tables={CarTables} />
        <Table.Data
          excludeTables={["portas", "__v", "funcionario"]}
          item={carItem}
        />
      </Table.Root>
    </BaseSection>
  );
};

export default memo(Dashboard);
