import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import queryApi from "../RtkQuery";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  [queryApi.reducerPath]: queryApi.reducer,
});
console.log(queryApi.reducer);

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
