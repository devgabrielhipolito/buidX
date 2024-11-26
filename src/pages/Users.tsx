import { useState } from "react";
import ModalManagerUser from "../components/Modal/ModalManagerUser";
import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import IsSucessComponent from "../components/Alerts/IsSucessComponent";
import GenericsTable from "../components/Generics/Table/GenericsTable";
import { UserTable } from "../utils/tables/tablesHelper";
import ModalEditUser from "../components/Modal/ModalEditUser";
import NavBar from "../components/common/Navbar/NavBarContent";
import Button from "../components/common/Button/Button";

const Users = () => {
  const [modal, setModal] = useState(false);
  const { users: listUsers, message } = useSelector(
    (state: rootState) => state.createEmployee
  );
  return (
    <section className="relative">
      <NavBar type="header">
        <h1 className="text-2xl text-white">
          <span className="text-blue-600">Genrecie</span> os seus usuarios
        </h1>
        <Button textButton="criar usuarios" setModal={setModal} />
      </NavBar>

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
