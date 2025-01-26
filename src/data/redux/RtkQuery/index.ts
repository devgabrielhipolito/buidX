import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ObjectUser } from "../../../types/authenticationTypes";
import { CarObject } from "../../types/productionTypes";
import { createUserObject } from "../../types/createUserTypes";
import { reqAuth, resAuth } from "../../types/apiTypes";

const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      authenticationUser: builder.mutation<resAuth, reqAuth>({
        query: (data) => ({
          url: "/auth",
          body: data,
          method: "POST",
        }),
      }),
      productionCreate: builder.mutation<any, CarObject[]>({
        query: (data) => ({
          url: "/production/create",
          body: { data },
          method: "POST",
        }),
      }),

      productionUpdateApi: builder.mutation<
        any,
        { _id: number; data: CarObject }
      >({
        query: (data) => ({
          url: `/production/updateTask/${data._id}`,
          body: data,
          method: "POST",
        }),
      }),

      productionDelete: builder.mutation<any, any>({
        query: (id: number) => ({
          url: `/production/delete/${id}`,
          method: "DELETE",
        }),
      }),
      createUserApi: builder.mutation<any, createUserObject>({
        query: (data) => ({
          url: "/users/createuser",
          body: data,
          method: "POST",
        }),
      }),
      deleteUserApi: builder.mutation<any, any>({
        query: (id: number) => ({
          url: `/users/delete/${id}`,
          method: "DELETE",
        }),
      }),
      requestUser: builder.mutation<any, any>({
        query: () => ({
          url: `/users/allusers`,
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useAuthenticationUserMutation,
  useProductionCreateMutation,
  useProductionUpdateApiMutation,
  useProductionDeleteMutation,
  useCreateUserApiMutation,
  useDeleteUserApiMutation,
  useRequestUserMutation,
} = queryApi;

export default queryApi;
