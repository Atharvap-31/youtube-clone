import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebar: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
    closeSidebar: (state) => {
      state.isSidebar = false;
    },
    openSidebar: (state) => {
      state.isSidebar = true;
    },
  },
});

export const { toggleSideBar, closeSidebar, openSidebar } = appSlice.actions;

export default appSlice.reducer;
