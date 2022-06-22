import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    favList: [
      {
        id: 123,
        name: "hi",
        image_url: "https://images.punkapi.com/v2/keg.png",
      },
    ],
  },
  reducers: {
    favs(state, action) {
      const newFavItem = action.payload.newFavoritedItem;
      state.favList = [...state.favList, newFavItem];

      console.log(state.favList);
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice;
