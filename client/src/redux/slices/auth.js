import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess(state, action) {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
    loginSuccess(state, action) {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
    initialize(state, action) {
      state = { ...state, ...action.payload };
      return state;
    },
    logoutSuccess(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
    editProfileSuccess(state, action) {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
  },
});

export const { registerSuccess, loginSuccess, initialize, logoutSuccess,editProfileSuccess } =
  slice.actions;

export default slice.reducer;
