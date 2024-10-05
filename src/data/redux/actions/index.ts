import { createAction } from "@reduxjs/toolkit";
import authenticationActions from "./authenticationActions";

export const authenticationRequest = createAction(
  authenticationActions.AUTHENTICATION_REQUEST
);
