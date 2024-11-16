import { createAction } from "@reduxjs/toolkit";
import authenticationActions from "./authenticationActions";
import { ObjectUser } from "../../../types/authenticationTypes";
import productionActions from "./productionActions";
import { CarObject } from "../../types/productionTypes";

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
