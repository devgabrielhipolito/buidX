import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export enum ActionsApi {
  authentication = "authentication",
  createProduction = "createProduction",
  productionUpdate = "productionUpdate",
  productionDelete = "productionDelete",
  createUser = "createUser",
  deleteUser = "deleteUser",
  requestUser = "requestUser",
}

export type dispatchTypes = {
  data?: any;
  action: any;
};

export type returnType = ReturnType<ActionCreatorWithPayload<any, any>>;

export type MappedFetchTypes<Tpayload = any, Tresponse = any> = {
  readonly [action: string]: {
    readonly api: (payload: Tpayload) => Promise<Tresponse>;
    readonly reducer: (payload: Tpayload) => returnType;
    reducerSucess?: (payload: Tpayload) => returnType;
    reducerFailed?: (payload: Tpayload) => returnType;
  };
};
