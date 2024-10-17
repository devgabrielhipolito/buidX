import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ObjectUser } from "../../../types/authenticationTypes";

const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      authenticationUser: builder.mutation({
        query: (data) => ({
          url: "/auth",
          body: data,
          method: "POST",
        }),
      }),
    };
  },
});

export const { useAuthenticationUserMutation } = queryApi;

export default queryApi;
