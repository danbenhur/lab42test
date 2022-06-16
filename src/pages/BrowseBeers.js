import { useState } from "react";
import BeersList from "../components/BeersList";
import Button from "../components/UI/Button";
import classes from "./BrowseBeers.module.css";

const BrowseBeer = () => {
  const [beers, setBeers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [favorites, setFavorites] = useState([]);

  const fetchBeers = async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?food=${inputVal}`
    );
    if (!response.ok) {
      console.log("RESPONSE IS NOT OKAY");
      throw new Error("Something went wrong!");
    } else {
      console.log("RESPONSE IS OKAY");
      const data = await response.json();

      const loadedBeers = [];

      for (const key in data) {
        loadedBeers.push({
          key,
          id: key,
          title: data[key].name,
          foodPairing: data[key].food_pairing,
          image: data[key].image_url,
          abv: data[key].abv,
          description: data[key].description,
          first_brewed: data[key].first_brewed,
        });
      }
      setBeers(loadedBeers);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    fetchBeers();
    setInputVal("");
  };
  const searchText =
    "Tell us what you like to eat and we will tell you which beer to drink!";

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <div className={classes.browse_beer}>
        <h2>{searchText}</h2>
        <form onSubmit={submitHandler}>
          <input
            value={inputVal}
            type="text"
            id="food"
            onChange={changeHandler}
            placeholder="Type here your favorite food"
          />

          <Button buttonText="Bring me My Beers!" />
        </form>
      </div>

      <BeersList beerList={beers} />
    </>
  );
};

export default BrowseBeer;
