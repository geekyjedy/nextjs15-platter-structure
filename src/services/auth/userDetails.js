import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../Basequeryauth";

export const userDetailApiSlice = createApi({
  reducerPath: "userDetailApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    userDetails: builder.query({
      query: () => ({
        url: "user/user-details",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserDetailsQuery } = userDetailApiSlice;
