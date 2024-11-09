import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

const apiVersion = process.env.VERSION;

// Centralized baseQuery function
const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: `${process.env.BASE_URL}/api/${apiVersion}`,  // Concatenate base URL with version
    prepareHeaders: (headers, { getState }) => {
    const userAuth = useSelector((state) => state?.persistedReducer?.user);
    const token = userAuth?.token// Assuming you store the token in auth slice
    if (token) {
      headers.set("x-token", token);
    }
    return headers;
  },
});

export default baseQueryWithAuth;
