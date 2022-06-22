import { configureStore } from "@reduxjs/toolkit";
import beersSlice from "./beers-slice";
import uiSlice from "./ui-slice";
import favSlice from "./fav-slice";

const store = configureStore({
  reducer: {
    beers: beersSlice.reducer,
    ui: uiSlice.reducer,
    fav: favSlice.reducer,
  },
});

export default store;
