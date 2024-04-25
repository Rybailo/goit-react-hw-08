import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  requestAddContact,
  requestDeleteContact,
  requestGetContact,
} from "../../services/contactsApi";

export const apiGetContacts = createAsyncThunk(
  "contacts/getContacts ",
  async (_, thunkApi) => {
    try {
      const data = await requestGetContact();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contacts/addContact",
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
