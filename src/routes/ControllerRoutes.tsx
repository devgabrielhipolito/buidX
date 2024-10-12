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
  const userPermission = useSelector(
    (state: rootState) => state.authentication.userPermission
  );
  console.log(userPermission);
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
    <section className="bg-black grid grid-cols-5 h-screen">
      <Sidenav routes={routes} userPermission={userPermission} />
      <Routes>{getRoutes()}</Routes>
    </section>
  );
};
