import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType, ObjectUser } from "../../../types/authenticationTypes";

const initialState: AuthType = {
  isAuthenticated: true,
  token: null,
  userPermission: "employee_master",
  user: null,
};

type responseAuth = {
  token: string;
  email: string;
  name: string;
  permission: string;
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state: AuthType,
      {
        payload: { token, email, name, permission },
      }: PayloadAction<responseAuth>
    ) => ({
      ...state,
      token: token,
      user: { email, name },
      userPermission: permission,
    }),
    AUTHENTICATION_SUCCESS: (state: AuthType) => ({
      ...state,
      isAuthenticated: true,
    }),
  },
});

export const { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS } =
  authenticationReducer.actions;
export default authenticationReducer.reducer;
