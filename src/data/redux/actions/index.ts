import { createAction } from "@reduxjs/toolkit";
import authenticationActions from "./authenticationActions";
import { ObjectUser } from "../../../types/authenticationTypes";
import productionActions from "./productionActions";
import { CarObject } from "../../types/productionTypes";
import createUserActions from "./createUserActions";

//AUTHENTICATION
export const authenticationRequest = createAction<ObjectUser>(
  authenticationActions.AUTHENTICATION_REQUEST
);
export const authenticationSuccess = createAction(
  authenticationActions.AUTHENTICATION_SUCCESS
);

//PRODUCTION
export const productionRequest = createAction<CarObject>(
  productionActions.PRODUCTION_REQUEST
);
export const productionUpdate = createAction<CarObject>(
  productionActions.PRODUCTION_UPDATE
);
export const productionSucess = createAction<boolean>(
  productionActions.PRODUCTION_SUCCESS
);
export const productionDelete = createAction(
  productionActions.PRODUCTION_DELETE
);

//CREATE_USER
export const createUser = createAction(createUserActions.CREATE_USER);

export const createUserUpdate = createAction(
  createUserActions.CREATE_USER_UPDATE
);
export const createUserDelete = createAction(
  createUserActions.CREATE_USER_DELETE
);

export const createUserSucess = createAction(
  createUserActions.CREATE_USER_SUCCESS
);
export const createUserFailed = createAction(
  createUserActions.CREATE_USER_FAILED
);
