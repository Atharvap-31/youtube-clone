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
  },
});

export const { toggleSideBar } = appSlice.actions;

export default appSlice.reducer;
