import { createSlice } from "@reduxjs/toolkit";

interface AuthDialogState {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
} as AuthDialogState;

const authDialogSlice = createSlice({
  name: "authDialog",
  initialState,
reducers: {
    openAuthDialog: (state) => {
      state.isOpen = true;
    },
    closeAuthDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAuthDialog, closeAuthDialog } = authDialogSlice.actions;
export default authDialogSlice.reducer;