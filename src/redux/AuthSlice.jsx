import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedin: false };
const User = JSON.parse(localStorage.getItem("User"));
if (User) {
  initialState.isLoggedin = true;
}
const AuthSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    Login(state, action) {
      state.isLoggedin = true;
    },
    Logout(state, action) {
      state.isLoggedin = false;
      state.isAdmin = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
