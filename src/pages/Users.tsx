import React, { useState } from "react";
import ModalManagerUser from "../components/Modal/ModalManagerUser";

const Users = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="relative">
      <header className="flex justify-between">
        <h1 className="text-2xl text-white">
          <span className="text-blue-600">Genrecie</span> os seus usuarios
        </h1>

        <button
          onClick={() => setModal(true)}
          className="bg-white p-2 font-semibold rounded-md text-sm"
        >
          Criar usuario
        </button>
      </header>
      <ModalManagerUser modal={modal} setModal={setModal} />
    </section>
  );
};

export default Users;
