import React, { FC, useState } from "react";
import { TypeRoutes } from "../../routes/types";
import verifyPermissions from "../../utils/alerts/verifyPermissions";
import { Link } from "react-router-dom";

interface iSidenav {
  routes: TypeRoutes[];
  userPermission: string;
}

const Sidenav: FC<iSidenav> = ({ routes, userPermission }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const linkAllowd = () => {
    return routes.map(({ key, path, permission, icon }) => {
      if (verifyPermissions(permission, userPermission)) {
        return (
          <li>
            <Link
              className=" flex gap-x-3 text-sm bg-gray-500 p-3 text-gray-300 rounded-md"
              to={path}
            >
              {icon}
              <p className="">{key}</p>
            </Link>
          </li>
        );
      }

      return null;
    });
  };
  return (
    <>
      <nav
        className={`grid  bg-gray-100 w-49 max-md:${
          isMobile ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-row-4">
          <header className="  row-span-1 flex items-center">
            <h2 className="text-[40px]  text-white">BuildX</h2>
          </header>
          <div className=" row-span-2 h-auto p-8">
            <ul className="grid gap-16 mt-5 ">{linkAllowd()}</ul>
          </div>
          <footer className="grid grid-cols-3 place-content-center items-center ">
            <img
              className="rounded-full mx-auto h-16"
              src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p className="bg-slate-50 mx-auto col-span-2">Bem vindo, Gabriel</p>
          </footer>
        </div>
      </nav>

      <button
        onClick={() => setIsMobile(!isMobile)}
        className=" bg-black hidden max-md:block"
      >
        abrir
      </button>
    </>
  );
};

export default Sidenav;
