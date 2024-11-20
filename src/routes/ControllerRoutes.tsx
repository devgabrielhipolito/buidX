import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { ReactElement, useCallback, useMemo } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import verifyPermissions from "../utils/alerts/verifyPermissions";
import Sidenav from "../components/Sidenav/Sidenav";

export const ControllerRoutes = () => {
  const isAuthenticated = useSelector(
    (state: rootState) => state.authentication.isAuthenticated
  );
  const { user, userPermission } = useSelector(
    (state: rootState) => state.authentication
  );
  const routes = useMemo(() => {
    if (!isAuthenticated) {
      return publicRoutes;
    }

    return privateRoutes;
  }, [isAuthenticated]);

  const getRoutes = useCallback(() => {
    const mappedRoutes: ReactElement[] = [];
    routes.map(({ key, path, element, permission }) => {
      if (verifyPermissions(permission, userPermission)) {
        mappedRoutes.push(<Route key={key} path={path} element={element} />);
      }
    });

    return mappedRoutes.flat() as ReactElement[];
  }, [isAuthenticated]);

  return (
    <section
      className={` w-full   relative  ${
        isAuthenticated ? " flex h-full bg-black" : ""
      }`}
    >
      {isAuthenticated && (
        <Sidenav
          routes={routes}
          userLogged={user?.name}
          userPermission={userPermission}
        />
      )}
      <section
        className={` w-full h-screen max-w[90%]  ${
          isAuthenticated ? "md:ml-[20%]" : ""
        } p-7 `}
      >
        <Routes>{getRoutes()}</Routes>
      </section>
    </section>
  );
};
