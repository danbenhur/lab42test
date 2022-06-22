import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { spinnerIsShown: false },
  reducers: {
    toggle(state) {
      state.spinnerIsShown = !state.spinnerIsShown;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
