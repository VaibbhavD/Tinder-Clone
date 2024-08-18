import { createSlice } from "@reduxjs/toolkit";

// Initial state for auth
const initialState = {
  isLoggedin: false,
  user: null,
};

// Check localStorage for existing user on load
const user = JSON.parse(localStorage.getItem("Users"));
if (user) {
  initialState.isLoggedin = true;
  initialState.user = user;
}

const AuthSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    Login(state, action) {
      // Set user state on login
      state.isLoggedin = true;
      state.user = action.payload; // Payload should contain user data
    },
    Logout(state) {
      // Clear user state on logout
      state.isLoggedin = false;
      state.user = null;
      localStorage.removeItem("Users"); // Clear localStorage when logging out
    },
  },
});

// Exporting the actions and reducer
export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
