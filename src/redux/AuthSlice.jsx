import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedin: false };
const user = JSON.parse(localStorage.getItem("User"));
if (user) {
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
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
