import { useState } from "react";
import ModalManagerUser from "../components/Modal/ModalManagerUser";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import IsSucessComponent from "../components/Alerts/IsSucessComponent";
import GenericsTable from "../components/Generics/Table/GenericsTable";
import { UserTable } from "../utils/tables/tablesHelper";
import ModalEditUser from "../components/Modal/ModalEditUser";
import Button from "../components/common/Button/Button";
import { NavBar } from "../components/common/Navbar";

const Users = () => {
  const [modal, setModal] = useState(false);
  const { users: listUsers, message } = useSelector(
    (state: rootState) => state.createEmployee
  );
  return (
    <section className="relative">
      <NavBar.Header>
        <NavBar.Titile text="Gerenciar contas de funcionarios" />
        <NavBar.Button
          onClick={() => setModal(true)}
          text="Criar um novo usuário"
        />
      </NavBar.Header>

      <section className="rounded-md mt-10 bg-gray-100 h-96 overflow-auto">
        <GenericsTable
          ModalElement={ModalEditUser}
          data={listUsers}
          tables={UserTable}
        />
      </section>

      <ModalManagerUser modal={modal} setModal={setModal} />
      <IsSucessComponent message={message} />
    </section>
  );
};

export default Users;
