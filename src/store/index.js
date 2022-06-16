import { configureStore } from "@reduxjs/toolkit";
import beersSlice from "./beers-slice";

const store = configureStore({
  reducer: { beers: beersSlice.reducer },
});

export default store;
