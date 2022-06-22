import Button from "./UI/Button";
import BeerDescription from "./BeerDescription";
import classes from "./BeerItem.module.css";
import Card from "./UI/Card";
import { favActions } from "../store/fav-slice";
import { useDispatch } from "react-redux";

import { useState } from "react";

const BeerItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, image_url } = props.beerData;
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

    dispatch(favActions.favs({ newFavoritedItem: { id, name, image_url } }));
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
            buttonAction={(event) => favHandler(event, { id, name, image_url })}
            buttonText="Add To Favorites"
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
