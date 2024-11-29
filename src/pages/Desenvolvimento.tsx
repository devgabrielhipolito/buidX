import React, { useState } from "react";
import ModalCreateProducion from "../components/Modal/ModalCreateProducion";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { CarTables } from "../utils/tables/tablesHelper";
import BaseSection from "../components/common/BaseSection/BaseSection";
import { NavBar } from "../components/common/Navbar";
import { Table } from "../components/common/Tables";

const Desenvolvimento = () => {
  const [modal, setModal] = useState(false);
  const carItems = useSelector((state: rootState) => state.production.car);

  return (
    <BaseSection>
      <NavBar.Header>
        <NavBar.Titile text="Gerencia sua produção" />

        <NavBar.Button
          onClick={() => setModal(true)}
          text="Criar uma nova produção"
        />
      </NavBar.Header>

      {/* <section className=" rounded-md mt-10 bg-gray-100 h-64 ">
        <GenericsTable
          ModalElement={ModalEditProduction}
          data={carItems}
          tables={CarTables}
        />
      </section> */}

      <Table.Root style={{ height: "400px" }}>
        <Table.Name tables={CarTables} />
        <Table.Data
          excludeTables={["portas", "__v", "funcionario"]}
          item={carItems}
        />
      </Table.Root>

      <ModalCreateProducion modal={modal} setModal={setModal} />
    </BaseSection>
  );
};

export default Desenvolvimento;
