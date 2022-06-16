import React from "react";
import Portal from "react-dom";
import classes from "./BeerDescription.module.css";
import Card from "./UI/Card";
import CloseButton from "./UI/CloseButton";

const BeerDescription = (props) => {
  const { title, foodPairing, image, abv, description, first_brewed } =
    props.beerData;

  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
  };
  const BeerDetails = () => {
    return (
      <Card className={classes.beer_details}>
        <div className={classes.details_properties}>
          <h2>{title}</h2>
          <h3>Goes along great with:</h3>
          <p>{foodPairing}</p>
          <h3>abv:</h3>
          <p>{abv}</p>
          <h3>Description:</h3>
          <p>{description}</p>
          <h3>First Brewed Date:</h3>
          <p>{first_brewed}</p>
        </div>
        <div className={classes.details_img}>
          <img alt="" src={image} />
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