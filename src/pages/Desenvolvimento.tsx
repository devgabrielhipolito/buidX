import React, { useState } from "react";
import ModalCreateProducion from "../components/Modal/ModalCreateProducion";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { CarTables } from "../utils/tables/tablesHelper";
import BaseSection from "../components/common/BaseSection/BaseSection";
import { NavBar } from "../components/common/Navbar";
import { Table } from "../components/common/Tables";
import IsSucessComponent from "../components/Alerts/IsSucessComponent";
import ModalEditProduction from "../components/Modal/ModalEditProduction";

const Desenvolvimento = () => {
  const [modal, setModal] = useState(false);
  const { car: carItems, isSucess } = useSelector(
    (state: rootState) => state.production
  );

  return (
    <BaseSection>
      <NavBar.Header>
        <NavBar.Titile text="Gerencia sua produção" />
        <NavBar.Button
          onClick={() => setModal(true)}
          text="Criar uma nova produção"
        />
      </NavBar.Header>
      <Table.Root style={{ height: "400px" }}>
        <Table.Name tables={CarTables} />
        <Table.Data
          excludeTables={["portas", "__v", "funcionario"]}
          item={carItems}
        />
        <Table.Modal ModalElement={ModalEditProduction} />
      </Table.Root>

      <ModalCreateProducion modal={modal} setModal={setModal} />
      <IsSucessComponent isSucess={isSucess} message="produção criada" />
    </BaseSection>
  );
};

export default Desenvolvimento;
