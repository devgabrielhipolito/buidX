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
              className=" flex gap-x-5  bg-gray-500 p-3 text-gray-300 rounded-md"
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
        className={`grid  bg-black w-49 max-md:${
          isMobile ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-row-4">
          <header className=" bg-slate-200 row-span-1 flex items-center">
            <h2 className="text-[40px]  text-white">BuildX</h2>
          </header>
          <div className=" row-span-4 h-auto p-8">
            <ul className="grid gap-16 mt-5 ">{linkAllowd()}</ul>
          </div>
          <footer className=" h-">teste</footer>
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
