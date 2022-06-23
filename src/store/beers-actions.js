import { beersActions } from "./beers-slice";
import { uiActions } from "./ui-slice";

export const fetchBeersData = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggle());
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

      dispatch(beersActions.beers({ beersFullList: beersData }));
      dispatch(uiActions.toggle());
    } catch (error) {
      throw new Error("Somehing went wrong!");
    }
  };
};

export const fetchFilteredBeers = (filter) => {
  return async (dispatch) => {
    dispatch(uiActions.toggle());
    const fetchDataWithFilter = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?food=${filter}`
      );

      if (!response.ok) {
        dispatch(uiActions.toggle());
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const beersData = await fetchDataWithFilter();
      dispatch(uiActions.toggle());
      dispatch(beersActions.beers({ beersFullList: beersData }));
    } catch (error) {
      dispatch(uiActions.toggle());
      throw new Error("Somehing went wrong!");
    }
  };
};
