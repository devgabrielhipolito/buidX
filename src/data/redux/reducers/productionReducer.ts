import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productionActions from "../actions/productionActions";
import { productionRequest } from "../actions";
import { createProductionSchema } from "../../../schemas/createProductionSchema";
import { CarObject } from "../../types/productionTypes";

interface ProductionType {
  id?: number | null;
  is_created: boolean;
  car: CarObject[];
  status: string;
}

const initialState: ProductionType = {
  id: null,
  is_created: false,
  car: [],
  status: "em produção",
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
      is_created: true,
    }),
    PRODUCTION_CANCEL: () => {},
  },
});

export const {
  PRODUCTION_REQUEST,
  PRODUCTION_UPDATE,
  PRODUCTION_SUCESS,
  PRODUCTION_CANCEL,
} = productionReducer.actions;

export default productionReducer.reducer;
