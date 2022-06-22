import { useSelector } from "react-redux";
import BeerItem from "../components/BeerItem";
import classes from "./BrowseBeers.module.css";

const FavoriteBeers = () => {
  const favoritesArray = useSelector((state) => state.fav.favList);

  const displayedBeers = favoritesArray.map((beer) => {
    return <BeerItem beerData={beer} key={beer.id} />;
  });

  return (
    <>
      <p>This is Favorite Beers</p>
      <div className={classes.beers_grid}>{displayedBeers}</div>
    </>
  );
};

export default FavoriteBeers;
