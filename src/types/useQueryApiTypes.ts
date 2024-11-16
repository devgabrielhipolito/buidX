import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export enum ActionsApi {
  authentication = "authentication",
  createProduction = "createProduction",
  productionUpdate = "productionUpdate",
  productionDelete = "productionDelete",
}

export type dispatchTypes = {
  data: any;
  action: ActionsApi;
};

export type returnType = ReturnType<ActionCreatorWithPayload<any, any>>;

export type MappedFetchTypes<Tpayload = any, Tresponse = any> = {
  readonly [action: string]: {
    readonly api: (payload: Tpayload) => Promise<Tresponse>;
    readonly reducer: (payload: Tpayload) => returnType;
    reducerSucess?: (payload: Tpayload) => returnType;
  };
};
