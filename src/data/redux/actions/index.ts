import { createAction } from "@reduxjs/toolkit";
import authenticationActions from "./authenticationActions";
import { ObjectUser } from "../../../types/authenticationTypes";
import productionActions from "./productionActions";
import { CarObject } from "../../types/productionTypes";
import createUserActions from "./createUserActions";
import { createUserObject } from "../../types/createUserTypes";

//AUTHENTICATION
export const authenticationRequest = createAction<ObjectUser>(
  authenticationActions.AUTHENTICATION_REQUEST
);
export const authenticationSuccess = createAction(
  authenticationActions.AUTHENTICATION_SUCCESS
);

export const authenticationLogout = createAction(
  authenticationActions.AUTHENTICATION_LOGOUT
);

//PRODUCTION
export const productionRequest = createAction<CarObject>(
  productionActions.PRODUCTION_REQUEST
);
export const productionUpdate = createAction<CarObject>(
  productionActions.PRODUCTION_UPDATE
);
export const productionSuccess = createAction<boolean>(
  productionActions.PRODUCTION_SUCCESS
);
export const productionDelete = createAction(
  productionActions.PRODUCTION_DELETE
);
export const productionResetSuccess = createAction(
  productionActions.PRODUCTION_RESET_SUCCESS
);

//CREATE_USER
export const createEmployee = createAction<createUserObject>(
  createUserActions.CREATE_EMPLOYEE
);

export const createEmployeeUpdate = createAction(
  createUserActions.CREATE_EMPLOYEE_UPDATE
);
export const createEmployeeDelete = createAction(
  createUserActions.CREATE_EMPLOYEE_DELETE
);
export const createEmployeeSucess = createAction(
  createUserActions.CREATE_EMPLOYEE_SUCCESS
);
export const createEmployeeResetSucess = createAction(
  createUserActions.CREATE_EMPLOYEE_RESET_SUCESS
);
export const createEmployeeRequest = createAction(
  createUserActions.CREATE_EXMPLOYEE_REQUEST
);
