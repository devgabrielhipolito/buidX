import { useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { ReactElement, useCallback, useMemo } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";

export const ControllerRoutes = () => {
  const isAuthenticated = useSelector(
    (state: rootState) => state.authentication.isAuthenticated
  );

  const routes = useMemo(() => {
    if (!isAuthenticated) return publicRoutes;

    return privateRoutes;
  }, [isAuthenticated]);

  const getRoutes = useCallback(() => {
    return routes.map(({ key, path, element }) => {
      const mappedRoutes: ReactElement[] = [];

      mappedRoutes.push(<Route key={key} path={path} element={element} />);

      return mappedRoutes.flat() as ReactElement[];
    });
  }, [isAuthenticated]);

  return (
    <section>
      <Routes>{getRoutes()}</Routes>
    </section>
  );
};
