import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../Basequeryauth";

export const registerApiSlice = createApi({
  reducerPath: "registerApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "user/create",
        method: "POST",
        body: credentials,
      }),
    }),
    artistregister: builder.mutation({
      query: (credentials) => ({
        url: "artist/register",
        method: "POST",
        body: credentials,
      }),
    }),
    socialMedia: builder.mutation({
      query: (credentials) => ({
        url: "user/social",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useArtistregisterMutation,
  useSocialMediaMutation,
} = registerApiSlice;
