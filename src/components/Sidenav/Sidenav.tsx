import React, { FC, useState } from "react";
import { TypeRoutes } from "../../routes/types";
import verifyPermissions from "../../utils/alerts/verifyPermissions";
import { Link } from "react-router-dom";
import OpenIcon from "../../assets/imgs/LinksIcons/OpenIcon";

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
          <li key={key}>
            <Link
              onClick={() => setIsMobile(false)}
              className=" flex gap-x-2 text-sm bg-gray-500 p-3 items-center text-gray-300 rounded-md"
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
        className={`fixed  md:flex h-screen flex-col justify-around w-[20%] box-border bg-gray-100 p-4
          ${isMobile ? "flex w-[300px]" : "hidden "}
         `}
      >
        <div className=" h-full flex flex-col  ">
          <header className=" flex items-center justify-between  mb-10">
            <h2 className="text-[40px]  text-white">BuildX</h2>

            {isMobile && (
              <button
                onClick={() => setIsMobile(!isMobile)}
                className="   hidden max-md:block  w-[30px] h-[30px] "
              >
                <OpenIcon isMobile={isMobile} />
              </button>
            )}
          </header>
          <ul className="flex flex-col justify-between gap-12  ">
            {linkAllowd()}
          </ul>
        </div>

        <footer className="flex justify-center gap-2    items-center ">
          <img
            className="rounded-full   h-16"
            src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="  col-span-2">
            <p className=" col-span-2 text-slate-100">Bem vindo, Gabriel</p>
            <span className="text-gray-300">{userPermission}</span>
          </div>
        </footer>
      </nav>

      {!isMobile && (
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="   hidden max-md:block  w-[30px] h-[30px] "
        >
          <OpenIcon isMobile={isMobile} />
        </button>
      )}
    </>
  );
};

export default Sidenav;
