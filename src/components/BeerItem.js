import Button from "./UI/Button";
import BeerDescription from "./BeerDescription";
import classes from "./BeerItem.module.css";
import Card from "./UI/Card";
import { favActions } from "../store/fav-slice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

const BeerItem = (props) => {
  const { id, name, image_url } = props.beerData;
  const favorites = useSelector((state) => state.fav.favList);

  const itemIsFav = favorites.find((item) => item.name === name);
  const dispatch = useDispatch();

  const beerData = props.beerData;

  const [showBeerDetails, setShowBeerDetails] = useState(false);
  const toggleBeerDescription = () => {
    setShowBeerDetails((showBeerDetails) => !showBeerDetails);
  };

  let beerName = name;
  if (beerName.length > 25) {
    beerName = beerName.substring(0, 10);
  }

  const favHandler = (event) => {
    event.stopPropagation();
    dispatch(favActions.favs({ currentItem: beerData }));
  };

  return (
    <>
      <Card>
        <div
          className={classes.beer_item}
          key={id}
          onClick={toggleBeerDescription}
        >
          <h3>{beerName}</h3>

          <img alt="" src={image_url} />
          <Button
            buttonAction={(event) => favHandler(event, beerData, itemIsFav)}
            buttonText={`${
              !itemIsFav ? "Add To Favorites" : "Remove From Favorites"
            }`}
            buttonClass={`${
              !itemIsFav
                ? classes.beer_item_add_button
                : classes.beer_item_remove_button
            }`}
          />
        </div>

        {showBeerDetails && (
          <BeerDescription
            onClick={toggleBeerDescription}
            beerData={beerData}
          />
        )}
      </Card>
    </>
  );
};

export default BeerItem;
