import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts } from "./operations";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          apiAddContact.pending,
          apiAddContact.pending,
          apiDeleteContact.pending
        ),
        (state) => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected
        ),
        (state) => {
          state.isError = true;
          state.isLoading = false;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
