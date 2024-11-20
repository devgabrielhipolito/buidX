import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import productionReducer from "./productionReducer";
import createEmployeeReducer from "./createEmployeeReducer";
import queryApi from "../RtkQuery";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  production: productionReducer,
  createEmployee: createEmployeeReducer,
  [queryApi.reducerPath]: queryApi.reducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
