import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
} as SidebarState;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;