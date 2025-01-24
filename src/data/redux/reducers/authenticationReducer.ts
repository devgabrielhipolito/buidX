import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType, ObjectUser } from "../../../types/authenticationTypes";

const initialState: AuthType = {
  isAuthenticated: false,
  token: null,
  userPermission: null,
  user: null,
  message: "",
};

type responseAuth = {
  token: string;
  email: string;
  name: string;
  permission: string;
  message: string;
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

    AUTHENTICATION_LOGOUT: (state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }),

    AUTHENTICATION_FAILED: (
      state: AuthType,
      { payload: { message } }: PayloadAction<responseAuth>
    ) => ({
      ...state,
      message: message,
    }),
  },
});

export const {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_LOGOUT,
} = authenticationReducer.actions;
export default authenticationReducer.reducer;
