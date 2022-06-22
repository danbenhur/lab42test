import { beersActions } from "./beers-slice";
import { uiActions } from "./ui-slice";

export const fetchBeersData = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggle({ spinnerIsShown: true }));
    const fetchData = async () => {
      const response = await fetch("https://api.punkapi.com/v2/beers");

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const beersData = await fetchData();
      dispatch(uiActions.toggle({ spinnerIsShown: false }));
      dispatch(beersActions.beers({ beersFullList: beersData }));
    } catch (error) {}
  };
};

export const fetchFilteredBeers = (filter) => {
  return async (dispatch) => {
    dispatch(uiActions.toggle({ spinnerIsShown: true }));
    const fetchData = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?food=${filter}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const beersData = await fetchData();
      dispatch(uiActions.toggle({ spinnerIsShown: false }));
      dispatch(beersActions.beers({ beersFullList: beersData }));
    } catch (error) {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error",
      //     message: "Fetching cart data failed",
      //   })
      // );
    }
  };
};
