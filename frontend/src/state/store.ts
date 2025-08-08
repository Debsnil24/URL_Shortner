import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import authDialogReducer from "./authDialogSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    authDialog: authDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;