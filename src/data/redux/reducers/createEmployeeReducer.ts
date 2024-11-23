import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarObject } from "../../types/productionTypes";
import { createUserObject } from "../../types/createUserTypes";

interface CreateUserType {
  users: createUserObject[];
  isSucess: boolean;
  message: string;
}

const initialState: CreateUserType = {
  users: [],
  isSucess: false,
  message: "",
};
initialState.message = "";
const createEmployeeReducer = createSlice({
  name: "createEmployee",
  initialState,
  reducers: {
    CREATE_EMPLOYEE: (
      state,
      {
        payload,
      }: PayloadAction<{
        allUsers: createUserObject[];
        message: string;
      }>
    ) => {
      const { allUsers, message } = payload;
      if (allUsers) {
        state.isSucess = true;
        state.users = allUsers;
        state.message = message;
      }
      state.message = message;
    },
    CREATE_EMPLOYEE_UPDATE: () => {},
    CREATE_USER_SUCESS: (state) => ({
      ...state,
      isSucess: true,
    }),
    CREATE_EMPLOYEE_DELETE: (
      state,
      {
        payload,
      }: PayloadAction<{
        allUsers: createUserObject[];
        message: string;
      }>
    ) => {
      const { allUsers, message } = payload;
      if (allUsers) {
        state.isSucess = true;
        state.users = allUsers;
      }
      state.message = message;
    },
    CREATE_EMPLOYEE_RESET_SUCESS: (state) => ({
      ...state,
      isSucess: false,
      message: "",
    }),
  },

  extraReducers: (builder) => {
    builder.addCase("persist/REHYDRATE", (state) => {
      state.message = "";
    });
  },
});

export const {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_DELETE,
  CREATE_EMPLOYEE_RESET_SUCESS,
  CREATE_USER_SUCESS,
  CREATE_EMPLOYEE_UPDATE,
} = createEmployeeReducer.actions;

export default createEmployeeReducer.reducer;
