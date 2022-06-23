import { useSelector, useDispatch } from "react-redux";
import { favActions } from "../store/fav-slice";
import BeerItem from "../components/BeerItem";
import classes from "./BrowseBeers.module.css";
import Button from "../components/UI/Button";

const FavoriteBeers = () => {
  const dispatch = useDispatch();
  const favoritesArray = useSelector((state) => state.fav.favList);
  const noFavs = favoritesArray.length === 0;

  const displayedBeers = favoritesArray.map((beer) => {
    return <BeerItem beerData={beer} key={beer.id} />;
  });
  const purgeFavHandler = () => {
    dispatch(favActions.purge());
  };

  return (
    <>
      {noFavs && (
        <h2 style={{ textAlign: "center" }}>
          You Havn't Picked Any Favorites Yet
        </h2>
      )}
      {!noFavs && (
        <Button
          buttonAction={purgeFavHandler}
          buttonText="Remove all favorites"
          buttonClass={classes.purge_button}
        />
      )}
      <div className={classes.beers_grid}>{displayedBeers}</div>
    </>
  );
};

export default FavoriteBeers;
