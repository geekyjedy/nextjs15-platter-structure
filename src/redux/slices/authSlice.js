import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    token: "",
    provider: "",
    authtype: "",
    user_id: 0,
    name: "",
    email: "",
    profile: "",
  },
  reducers: {
    userLoginSet: (state, action) => {
      state.auth = true;
      state.token = action.payload.token || "";

      // Set user details based on the API response format
      if (action.payload.data) {
        state.user_id = action.payload.data.id || 0;
        state.authtype = action.payload.data.loginType || "";
        state.provider = action.payload.data.loginType || "";
        state.name = action.payload.data.userName || "";
        state.email = action.payload.data.email || "";
        state.profile = action.payload.data.profile || "";
      } else {
        state.user_id = 0;
        state.authtype = "";
        state.provider = "";
        state.name = "";
        state.email = "";
        state.profile = "";
      }
    },
    logoutSet: (state) => {
      state.auth = false;
      state.user_type = "";
      state.token = "";
      state.authtype = "";
      state.user_id = 0;
      state.provider = "";
      state.name = "";
      state.email = "";
      state.profile = "";
    },
    restaurantLoginSet: (state, action) => {
      state.auth = true;
      state.user_type = "business";
      state.token = action.payload || "";
    },
    setProvider: (state, action) => {
      state.provider = action.payload;
    },
    typeUpdate: (state, action) => {
      state.authtype = action.payload;
    },
  },
});

export const { userLoginSet, logoutSet, restaurantLoginSet, typeUpdate } =
  authSlice.actions;
export default authSlice.reducer;
