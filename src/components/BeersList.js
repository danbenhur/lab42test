import BeerItem from "./BeerItem";
import classes from "./BeersList.module.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";
// import Card from "./UI/Card";

const BeersList = (props) => {
  const [pageNumber, setPageNumber] = useState(0);

  const beersPerPage = 6;
  const pageVisited = pageNumber * beersPerPage;

  const beers = props.beerList;

  const displayedBeers = beers
    .slice(pageVisited, pageVisited + beersPerPage)
    .map((beer) => {
      return <BeerItem beerData={beer} key={beer.key} />;
    });

  const pageCount = Math.ceil(beers.length / beersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className={classes.beers_grid}>{displayedBeers}</div>
      {beers.length > 0 && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={classes.pagination_btn}
          activeClassName={classes.pagination_active}
        />
      )}
    </>
  );
};

export default BeersList;
