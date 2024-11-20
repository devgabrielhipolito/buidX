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
      }
      console.log(state.users, message);
      state.message = message;
    },
    CREATE_EMPLOYEE_UPDATE: () => {},
    CREATE_USER_SUCESS: (state) => ({
      ...state,
      isSucess: true,
    }),
    CREATE_USER_DELETE: () => {},
    CREATE_EMPLOYEE_RESET_SUCESS: (state) => ({
      ...state,
      isSucess: false,
    }),
  },
});

export const {
  CREATE_EMPLOYEE,
  CREATE_USER_DELETE,
  CREATE_EMPLOYEE_RESET_SUCESS,
  CREATE_USER_SUCESS,
  CREATE_EMPLOYEE_UPDATE,
} = createEmployeeReducer.actions;

export default createEmployeeReducer.reducer;
