import Button from "./UI/Button";
import BeerDescription from "./BeerDescription";
import classes from "./BeerItem.module.css";
import Card from "./UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { beersActions } from "../store/beers-slice";

const BeerItem = (props) => {
  const showBeerDetails = useSelector(
    (state) => state.beers.descriptionIsShown
  );

  const dispatch = useDispatch();

  const { id, title, image } = props.beerData;

  const onBeerClickHandler = () => {
    dispatch(beersActions.toggle());
  };

  let beerName = title;
  if (beerName.length > 25) {
    beerName = beerName.substring(0, 10);
  }
  const closeBeerDescription = () => {
    dispatch(beersActions.toggle());
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

        {showBeerDetails && (
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
