import React, { useState } from "react";
import ModalCreateProducion from "../components/Modal/ModalCreateProducion";
import TableDevelopment from "../components/Desenvolvimento/Form/TableDevelopment";
import GenericsTable from "../components/Generics/Table/GenericsTable";
import ModalEditProduction from "../components/Modal/ModalEditProduction";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { CarTables } from "../utils/tables/tablesHelper";

const Desenvolvimento = () => {
  const [modal, setModal] = useState(false);
  const carItems = useSelector((state: rootState) => state.production.car);

  return (
    <section className="relative">
      <header className="flex justify-between">
        <h1 className="text-2xl text-white">
          <span className="text-blue-600">Gerencie</span> sua produção
        </h1>

        <button
          onClick={() => setModal(!modal)}
          className="bg-white p-2 font-semibold rounded-md text-sm"
        >
          Criar uma produção
        </button>
      </header>

      <section className=" rounded-md mt-10 bg-gray-100 h-64 ">
        <GenericsTable
          ModalElement={ModalEditProduction}
          data={carItems}
          tables={CarTables}
        />
      </section>

      <ModalCreateProducion modal={modal} setModal={setModal} />
    </section>
  );
};

export default Desenvolvimento;
