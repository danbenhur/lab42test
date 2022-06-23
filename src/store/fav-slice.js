import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    favList: [],
  },
  reducers: {
    favs(state, action) {
      const currentItem = action.payload.currentItem;
      const id = currentItem.id;
      const existingItem = state.favList.find((item) => item.id === id);

      if (!existingItem) {
        state.favList = [...state.favList, currentItem];
      } else {
        state.favList = state.favList.filter((item) => item.id !== id);
      }
    },
    purge(state) {
      state.favList = [];
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice;
