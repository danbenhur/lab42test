import { createSlice } from "@reduxjs/toolkit";

const beersSlice = createSlice({
  name: "beers",
  initialState: { beersFullList: [] },
  reducers: {
    beers(state, action) {
      state.beersFullList = action.payload.beersFullList;
    },
  },
});

export const beersActions = beersSlice.actions;
export default beersSlice;
