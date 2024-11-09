import { combineReducers } from "@reduxjs/toolkit";
import authUserReducer from "../slices/authSlice"
import cartReducer from "../slices/cartSlice";
import chatReducer from "../slices/chatSlice";

const rootReducer = combineReducers({
  user: authUserReducer,
  cart: cartReducer,
  chat: chatReducer
});

export default rootReducer;
