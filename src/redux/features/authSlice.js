import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  access: localStorage.getItem("access") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.access = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("access", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.access = null;
      localStorage.clear();
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;