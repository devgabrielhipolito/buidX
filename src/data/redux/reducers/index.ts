import { combineSlices, ReducerType } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationReducer";

const rootReducer = combineSlices({
  authentication: authenticationReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
