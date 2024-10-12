import React from "react";
import { PermissionsRequired } from "../../types/permissions";

export default function verifyPermissions(
  permission: PermissionsRequired[],
  userPermission: string
) {
  if (permission.includes(PermissionsRequired.NO_ROLE_REQUIRED)) {
    return true;
  }
  if (permission.includes(userPermission as PermissionsRequired)) {
    console.log("incluso");
    return true;
  }
  return false;
}
