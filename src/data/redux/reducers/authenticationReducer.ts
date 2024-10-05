import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userType = {
  name: string;
  email: string;
};

type AuthType = {
  token: string | null;
  isAuthenticated: boolean;
  userPemission: string;
  user: userType | null;
};

const initialState: AuthType = {
  isAuthenticated: false,
  token: null,
  userPemission: "cargo",
  user: null,
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state: AuthType,
      { payload: data }: PayloadAction<any>
    ) => ({
      ...state,
    }),
  },
});

export const { AUTHENTICATION_REQUEST } = authenticationReducer.actions;
export default authenticationReducer.reducer;
