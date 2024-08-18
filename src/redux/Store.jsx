import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice"; // Fixed typo from "auhtreducers" to "authReducer"

export const Store = configureStore({
  reducer: {
    authUser: authReducer, // Use a consistent name for your auth slice
  },
  devTools: process.env.NODE_ENV !== "production", // Enable devTools only in non-production environments
});
