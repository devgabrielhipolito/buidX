import ComponentsDepoyments from "../components/depoyments/ComponentsDepoyments";
import Login from "../pages/Login";
import { userPermission } from "../utils/permission";
import { TypeRoutes } from "./types";

export const publicRoutes: TypeRoutes[] = [
  {
    element: <Login />,
    key: "Login",
    path: "/",
    permission: [userPermission.EMPLOYEE_MASTER],
  },
  {
    element: <ComponentsDepoyments />,
    key: "Deployment",
    path: "/deployment",
    permission: [userPermission.EMPLOYEE],
  },
];

export const privateRoutes: TypeRoutes[] = [
  {
    element: <p>overview</p>,
    key: "overview",
    path: "/overview",
    permission: [userPermission.EMPLOYEE, userPermission.EMPLOYEE_MASTER],
  },
];
