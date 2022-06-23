import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBeersData } from "../store/beers-actions";

import BeerFilter from "../components/BeerFilter";
import BeerItem from "../components/BeerItem";
import Spinner from "../components/UI/spinner";
import ReactPaginate from "react-paginate";

import classes from "./BrowseBeers.module.css";

const BrowseBeer = () => {
  const showSpinner = useSelector((state) => state.ui.spinnerIsShown);
  const beers = useSelector((state) => state.beers.beersFullList);
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);

  const beersPerPage = 6;
  const pageVisited = pageNumber * beersPerPage;

  const displayedBeers = beers
    .slice(pageVisited, pageVisited + beersPerPage)
    .map((beer) => {
      return <BeerItem beerData={beer} key={beer.id} />;
    });

  const noBeers = displayedBeers.length === 0;

  const pageCount = Math.ceil(beers.length / beersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    dispatch(fetchBeersData());
  }, [dispatch]);
  return (
    <>
      <BeerFilter />
      {showSpinner && <Spinner />}
      {noBeers && (
        <h2 style={{ textAlign: "center" }}>
          Sorry, we can't find a beer that matches your search{" "}
        </h2>
      )}
      {!noBeers && <div className={classes.beers_grid}>{displayedBeers}</div>}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.pagination_btn}
        activeClassName={classes.pagination_active}
      />
    </>
  );
};

export default BrowseBeer;
