export enum PermissionsRequired {
  "NO_ROLE_REQUIRED" = "NO_ROLE_REQUIRED",
  "EMPLOYEE" = "employee",
  "EMPLOYEE_MASTER" = "employee_master",
  "MANAGER" = "manager",
}

export const permissionArray = Object.values(PermissionsRequired);
