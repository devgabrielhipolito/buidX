import { ReactElement } from "react";
import { PermissionsRequired } from "../../types/permissions";

export type TypeRoutes = {
  icon?: ReactElement;
  element: ReactElement;
  key: string;
  path: string;
  permission: PermissionsRequired[];
};
