import { createSlice } from "@reduxjs/toolkit";
import { apiLoginUser, apiRefreshUser, apiRegisterUser } from "./operations";

const initialState = {
  userData: null,
  token: null,
  isSignedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(apiLoginUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(apiLoginUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isError = false;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.userData = action.payload;
        state.isSignedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isError = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
