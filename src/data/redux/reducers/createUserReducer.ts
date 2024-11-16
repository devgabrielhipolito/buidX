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
      { payload }: PayloadAction<{ data: CarObject[] }>
    ) => ({
      ...state,
      car: payload.data,
    }),
    PRODUCTION_UPDATE: (
      state,
      { payload }: PayloadAction<{ data: CarObject[] }>
    ) => ({
      ...state,
      car: payload.data,
    }),
    PRODUCTION_SUCESS: (state: ProductionType) => ({
      ...state,
      isSucess: true,
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
  PRODUCTION_UPDATE,
  PRODUCTION_SUCESS,
  PRODUCTION_DELETE,
} = productionReducer.actions;

export default productionReducer.reducer;
