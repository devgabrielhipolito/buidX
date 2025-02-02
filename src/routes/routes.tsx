import AdminIcon from "../assets/imgs/LinksIcons/AdminIcon";
import DashboardIcon from "../assets/imgs/LinksIcons/DashboardIcon";
import DevelpomentIcon from "../assets/imgs/LinksIcons/DevelpomentIcon";
import Logout from "../components/Logout/Logout";
import Dashboard from "../pages/Dashboard";
import Desenvolvimento from "../pages/Desenvolvimento";
import Login from "../pages/Login";
import Users from "../pages/Users";
import { PermissionsRequired } from "../types/permissions";
import { TypeRoutes } from "./types";

export const publicRoutes: TypeRoutes[] = [
  {
    element: <Login />,
    key: "Login",
    path: "/",
    permission: [PermissionsRequired.NO_ROLE_REQUIRED],
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
    element: <Desenvolvimento />,
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
    element: <Users />,
    key: "Usuarios",
    icon: <AdminIcon />,
    path: "/usuarios",
    permission: [
      PermissionsRequired.EMPLOYEE_MASTER,
      PermissionsRequired.MANAGER,
    ],
  },
  {
    element: <Logout />,
    key: "Logout",
    path: "/logout",
    permission: [PermissionsRequired.NO_ROLE_REQUIRED],
  },
];
