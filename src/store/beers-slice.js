import { createSlice } from "@reduxjs/toolkit";

const beersSlice = createSlice({
  name: "beers",
  initialState: { descriptionIsShown: false },
  reducers: {
    toggle(state) {
      state.descriptionIsShown = !state.descriptionIsShown;
    },
  },
});

export const beersActions = beersSlice.actions;
export default beersSlice;
