import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { crudApiSlice } from "@/services/crud/crud";
import { adminAuthApiSlice } from "@/services/auth/auth";
import { registerApiSlice } from "@/services/auth/register";
import { userDetailApiSlice } from "@/services/auth/userDetails";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    [adminAuthApiSlice.reducerPath]: adminAuthApiSlice.reducer,
    [registerApiSlice.reducerPath]: registerApiSlice.reducer,
    [userDetailApiSlice.reducerPath]: userDetailApiSlice.reducer,
    [crudApiSlice.reducerPath]: crudApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      adminAuthApiSlice.middleware,
      registerApiSlice.middleware,
      userDetailApiSlice.middleware,
      crudApiSlice.middleware,
    ),
});

const persistor = persistStore(store);
setupListeners(store.dispatch);

export { store, persistor };
