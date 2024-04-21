import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestSignIn,
  requestSignUp,
  setToken,
} from "../../services/contactsApi";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);
    try {
      const data = await requestGetCurrentUser(formData);
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
