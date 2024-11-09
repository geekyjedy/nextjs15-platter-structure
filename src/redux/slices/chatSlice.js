import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    onlineUsers: [], // Initial state for online users
  },
  reducers: {
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload; // Update onlineUsers state
    },
  },
});

export const { setOnlineUsers } = chatSlice.actions;
export default chatSlice.reducer;