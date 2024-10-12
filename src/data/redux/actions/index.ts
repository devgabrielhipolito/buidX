import { createAction } from "@reduxjs/toolkit";
import authenticationActions from "./authenticationActions";
import { ObjectUser } from "../../../types/authenticationTypes";

export const authenticationRequest = createAction<ObjectUser>(
  authenticationActions.AUTHENTICATION_REQUEST
);

export const authenticationSuccess = createAction(
  authenticationActions.AUTHENTICATION_SUCCESS
);
