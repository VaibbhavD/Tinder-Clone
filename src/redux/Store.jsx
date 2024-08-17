import { configureStore } from "@reduxjs/toolkit";
import auhtreducers from "./AuthSlice";

export const Store = configureStore({
  reducer: {
    authUser: auhtreducers,
  },
  devTools: true,
});
