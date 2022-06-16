import Button from "./UI/Button";
import BeerDescription from "./BeerDescription";
import classes from "./BeerItem.module.css";
import Card from "./UI/Card";

import { useState } from "react";

const BeerItem = (props) => {
  const { id, title, image } = props.beerData;

  const [descriptionIsShown, setDescriptionIsShown] = useState(false);

  const onBeerClickHandler = () => {
    setDescriptionIsShown(true);
  };

  let beerName = title;
  if (beerName.length > 25) {
    beerName = beerName.substring(0, 10);
  }
  const closeBeerDescription = () => {
    setDescriptionIsShown(false);
  };

  return (
    <>
      <Card>
        <div
          className={classes.beer_item}
          onClick={onBeerClickHandler}
          beernumber={id}
        >
          <h3>{beerName}</h3>
          <img alt="" src={image} />
          <Button
            //buttonAction={(event) => addToFavorites(event, id, image)}
            buttonText="Add To Favorites"
          />
        </div>

        {descriptionIsShown && (
          <BeerDescription
            onClick={closeBeerDescription}
            beerData={props.beerData}
          />
        )}
      </Card>
    </>
  );
};

export default BeerItem;
