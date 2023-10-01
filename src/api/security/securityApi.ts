import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {login, logout, security} from "../paths";

export const securityApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: security }),
  tagTypes: ["security"],
  reducerPath: "securityApi",
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: logout,
        method: "POST",
        responseHandler: "text"
      }),
    }),
    login: builder.mutation({
      query: (values) => ({
        body: values,
        url: login,
        method: "POST",
        responseHandler: "text"
      }),
    }),
  }),
});

console.log("typeof securityApi: ", typeof securityApi)

export const { useLogoutMutation, useLoginMutation } = securityApi;
