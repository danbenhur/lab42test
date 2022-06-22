import BeerItem from "./BeerItem";
import classes from "./BeersList.module.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";
// import Card from "./UI/Card";

const BeersList = (props) => {


  const beers = props.beerList;
  console.log(beers);

  const beerItem = beers.map((beer) => {
    return (
      <div>
        <img src={beer.image_url} />{" "}
      </div>
    );
    //  key,
    //  id: key,
    //  title: beers[key].name,
    //  foodPairing: beers[key].food_pairing,
    //  image: beers[key].image_url,
    //  abv: beers[key].abv,
    //  description: beers[key].description,
    //  first_brewed: beers[key].first_brewed,
  });

    // const [pageNumber, setPageNumber] = useState(0);

  // const beersPerPage = 6;
  // const pageVisited = pageNumber * beersPerPage;
  // const displayedBeers = beers
  //   .slice(pageVisited, pageVisited + beersPerPage)
  //   .map((beer) => {
  //     return <BeerItem beerData={beer} key={beer.key} />;
  //     console.log(beer);
  //   });

  // const pageCount = Math.ceil(beers.length / beersPerPage);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <>
      {beerItem}
      {/*  <div className={classes.beers_grid}>{displayedBeers}</div>
       {beers.length > 0 && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={classes.pagination_btn}
          activeClassName={classes.pagination_active}
        />
      )} */}
    </>
  );
};

export default BeersList;
