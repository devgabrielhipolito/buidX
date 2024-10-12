import {
  authenticationRequest,
  authenticationSuccess,
} from "../data/redux/actions";
import { ObjectUser } from "./authenticationTypes";

export enum ActionsApi {
  authentication = "authentication",
}

export type dispatchTypes = {
  data: ObjectUser;
  action: ActionsApi;
};

export type returnTypeRequest = ReturnType<typeof authenticationRequest>;
export type returnTypesSucess = ReturnType<typeof authenticationSuccess>;

export type MappedFetchTypes<Tpayload = any, Tresponse = any> = {
  readonly [action: string]: {
    readonly api: (payload: Tpayload) => Promise<Tresponse>;
    readonly reducer: (payload: Tpayload) => returnTypeRequest;
    reducerSucess?: (payload: Tpayload) => returnTypesSucess;
  };
};
