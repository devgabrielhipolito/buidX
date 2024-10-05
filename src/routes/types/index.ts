import { ReactElement } from "react";
import { userPermission } from "../../utils/permission";

export type TypeRoutes = {
  icon?: ReactElement;
  element: ReactElement;
  key: string;
  path: string;
  permission: userPermission[];
};
