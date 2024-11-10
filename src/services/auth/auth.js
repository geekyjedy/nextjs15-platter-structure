import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../Basequeryauth";

export const adminAuthApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    login: builder.query({
      query: (credentials) => ({
        url: "user/login",  // Only specify the endpoint path
        method: "POST",
        body: credentials,
      }),
    }),
    forgotpassword: builder.query({
      query: (credentials) => ({
        url: "user/forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyotp: builder.query({
      query: (credentials) => ({
        url: "user/send-otp-email",
        method: "POST",
        body: credentials,
      }),
    }),
    resetpassword: builder.mutation({
      query: (credentials) => ({
        url: "user/reset-password",
        method: "POST",
        body: credentials,
      }),
    }),
    sociallogin: builder.mutation({
      query: (credentials) => ({
        url: "user/social-login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLazyLoginQuery,
  useLazyForgotpasswordQuery,
  useLazyVerifyotpQuery,
  useResetpasswordMutation,
  useSocialloginMutation,
} = adminAuthApiSlice;
