import { createSelector } from "@reduxjs/toolkit";
import { selectGetContacts } from "../contacts/selectors";

export const getFilter = (state) => state.filter;

export const selectVisibleContacts = createSelector(
  [selectGetContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
