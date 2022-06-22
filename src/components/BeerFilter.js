import Button from "./UI/Button";
import { useRef } from "react";
import { fetchFilteredBeers } from "../store/beers-actions";
import { useDispatch } from "react-redux";
import classes from "./BeersFilter.module.css";

const BeerFilter = () => {
  const filterRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const filterVal = filterRef.current.value;
    dispatch(fetchFilteredBeers(filterVal));
  };

  return (
    <>
      <div className={classes.filter_title}>
        <h2>
          Don't drink beer with an empty plate.
          <br />
          We'll pick the best match for you.
        </h2>
        <h5>
          You don't have to worry anymore about choosing the best beer that goes
          along with your dinner. Our team of experts will do the best match for
          you.
        </h5>
      </div>

      <form className={classes.filter_form} onSubmit={submitHandler}>
        <input
          type="text"
          id="food"
          placeholder="Type here your favorite food"
          ref={filterRef}
        />

        <Button buttonText="Bring me My Beers!" />
      </form>
    </>
  );
};

export default BeerFilter;
