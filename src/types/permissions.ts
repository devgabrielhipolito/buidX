export enum PermissionsRequired {
  "EMPLOYEE" = "employee",
  "EMPLOYEE_MASTER" = "employee_master",
  "MANAGER" = "manager",
}

export const permissionArray = Object.values(PermissionsRequired);
