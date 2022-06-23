import React from "react";
import { favActions } from "../store/fav-slice";
import Portal from "react-dom";
import classes from "./BeerDescription.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import CloseButton from "./UI/CloseButton";
import { useDispatch, useSelector } from "react-redux";

const BeerDescription = (props) => {
  const beerData = props.beerData;
  const dispatch = useDispatch();
  const { name, food_pairing, image_url, abv, description, first_brewed } =
    props.beerData;

  const favorites = useSelector((state) => state.fav.favList);

  const itemIsFav = favorites.find((item) => item.description === description);

  const favHandler = () => {
    dispatch(favActions.favs({ currentItem: beerData }));
  };

  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
  };
  const BeerDetails = () => {
    return (
      <Card className={classes.beer_details}>
        <div className={classes.details_properties}>
          <div className={classes.details_properties_text}>
            <h2>{name}</h2>
            <h3>Goes along great with:</h3>
            <p>{food_pairing}</p>
            <h3>abv:</h3>
            <p>{abv}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <h3>First Brewed Date:</h3>
            <p>{first_brewed}</p>
          </div>
          <Button
            buttonAction={() => favHandler(beerData, itemIsFav)}
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

        <div className={classes.details_img}>
          <img alt="" src={image_url} />
        </div>
        <CloseButton onClick={props.onClick} />
      </Card>
    );
  };

  return (
    <>
      {Portal.createPortal(
        <Backdrop />,
        document.getElementById("beer-description-backdrop")
      )}
      {Portal.createPortal(
        <BeerDetails />,
        document.getElementById("beer-description-content")
      )}
    </>
  );
};

export default BeerDescription;
