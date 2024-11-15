import React, { useState } from "react";
import ModalCreateProducion from "../components/Modal/ModalCreateProducion";
import TableDevelopment from "../components/Desenvolvimento/Form/TableDevelopment";

const Desenvolvimento = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="relative">
      <header className="flex justify-between">
        <h1 className="text-2xl text-white">
          <span className="text-blue-600">Genrecie</span> sua produção
        </h1>

        <button
          onClick={() => setModal(!modal)}
          className="bg-white p-2 font-semibold rounded-md text-sm"
        >
          Criar uma produção
        </button>
      </header>
      <ModalCreateProducion modal={modal} setModal={setModal} />
      <TableDevelopment />
    </section>
  );
};

export default Desenvolvimento;
