import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarObject } from "../../types/productionTypes";

interface ProductionType {
  isSucess: boolean;
  car: CarObject[];
  isFailed: boolean;
  message: string;
}

const initialState: ProductionType = {
  isSucess: false,
  isFailed: false,
  message: "",
  car: [],
};
const productionReducer = createSlice({
  name: "production",
  initialState,
  reducers: {
    PRODUCTION_REQUEST: (
      state,
      { payload }: PayloadAction<{ data: CarObject[]; status: string }>
    ) => {
      const { status, data } = payload;
      if (data) {
        state.car = data;
        state.message = status;
      }
      state.message = status;
    },
    PRODUCTION_UPDATE: (
      state,
      { payload }: PayloadAction<{ data: CarObject[] }>
    ) => ({
      ...state,
      car: payload.data,
    }),
    PRODUCTION_SUCCESS: (state: ProductionType) => ({
      ...state,
      isSucess: true,
    }),
    PRODUCTION_RESET_SUCCESS: (state: ProductionType) => ({
      ...state,
      isSucess: false,
    }),
    PRODUCTION_DELETE: (
      state,
      { payload }: PayloadAction<{ data: CarObject[]; status: string }>
    ) => ({
      ...state,
      car: payload.data,
    }),
  },
});

export const {
  PRODUCTION_REQUEST,
  PRODUCTION_RESET_SUCCESS,
  PRODUCTION_UPDATE,
  PRODUCTION_SUCCESS,
  PRODUCTION_DELETE,
} = productionReducer.actions;

export default productionReducer.reducer;
