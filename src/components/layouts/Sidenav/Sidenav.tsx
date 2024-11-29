import React, { FC, useState } from "react";
import { TypeRoutes } from "../../../routes/types";
import verifyPermissions from "../../../utils/alerts/verifyPermissions";
import { Link } from "react-router-dom";
import OpenIcon from "../../../assets/imgs/LinksIcons/OpenIcon";
import { useSelector } from "react-redux";
import { rootState } from "../../../data/redux/reducers";
import Profile from "../../common/Profile/Profile";
import { NavBar } from "../../common/Navbar";
import BaseSection from "../../common/BaseSection/BaseSection";

interface iSidenav {
  routes: TypeRoutes[];
  userPermission: string;
  userLogged: string | undefined;
}
const Sidenav: FC<iSidenav> = ({ routes, userPermission, userLogged }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const userlogged = useSelector(
    (state: rootState) => state.authentication.user
  );

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
      <NavBar.SideNav>
        <NavBar.Brand brand="BuidX" />
        <NavBar.Links links={linkAllowd} />
        <NavBar.Profile
          img="
          https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          permission={userPermission}
          userLogged={userlogged?.name}
        />
      </NavBar.SideNav>

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
