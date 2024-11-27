import React, { useState } from "react";
import ModalCreateProducion from "../components/Modal/ModalCreateProducion";
import TableDevelopment from "../components/Desenvolvimento/Form/TableDevelopment";
import GenericsTable from "../components/Generics/Table/GenericsTable";
import ModalEditProduction from "../components/Modal/ModalEditProduction";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { CarTables } from "../utils/tables/tablesHelper";
import BaseSection from "../components/common/BaseSection/BaseSection";
import { NavBar } from "../components/common/Navbar";

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

      

      <ModalCreateProducion modal={modal} setModal={setModal} />
    </BaseSection>
  );
};

export default Desenvolvimento;
