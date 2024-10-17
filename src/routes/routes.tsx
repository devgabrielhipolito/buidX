import AdminIcon from "../assets/imgs/LinksIcons/AdminIcon";
import DashboardIcon from "../assets/imgs/LinksIcons/DashboardIcon";
import DevelpomentIcon from "../assets/imgs/LinksIcons/DevelpomentIcon";
import TeamManagerIcon from "../assets/imgs/LinksIcons/TeamManagerIcon";
import ComponentsDepoyments from "../components/depoyments/ComponentsDepoyments";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { PermissionsRequired } from "../types/permissions";
import { TypeRoutes } from "./types";

export const publicRoutes: TypeRoutes[] = [
  {
    element: <Login />,
    key: "Login",
    path: "/",
    permission: [PermissionsRequired.EMPLOYEE_MASTER],
  },
  {
    element: <ComponentsDepoyments />,
    key: "Deployment",
    path: "/deployment",
    permission: [PermissionsRequired.EMPLOYEE],
  },
];

export const privateRoutes: TypeRoutes[] = [
  {
    element: <Dashboard />,
    key: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
    permission: [
      PermissionsRequired.EMPLOYEE,
      PermissionsRequired.EMPLOYEE_MASTER,
      PermissionsRequired.MANAGER,
    ],
  },
  {
    element: <p>Desenvolvimento</p>,
    key: "Desenvolvimento",
    icon: <DevelpomentIcon />,
    path: "/desenvolvimento",
    permission: [
      PermissionsRequired.EMPLOYEE,
      PermissionsRequired.EMPLOYEE_MASTER,
      PermissionsRequired.MANAGER,
    ],
  },
  {
    element: <p>ManagerEquip</p>,
    key: "Gererenciar equipe",
    icon: <TeamManagerIcon />,
    path: "/gerenciar-equipe",
    permission: [
      PermissionsRequired.EMPLOYEE_MASTER,
      PermissionsRequired.MANAGER,
    ],
  },
  {
    element: <p>Acessos</p>,
    key: "acessos",
    icon: <AdminIcon />,
    path: "/",
    permission: [
      PermissionsRequired.EMPLOYEE_MASTER,
      PermissionsRequired.MANAGER,
    ],
  },
];
