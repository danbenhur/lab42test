import { useRef } from "react";
import { fetchFilteredBeers } from "../store/beers-actions";
import { useDispatch } from "react-redux";
import classes from "./BeersFilter.module.css";
import { useState } from "react";

const BeerFilter = () => {
  const [input, setsetInput] = useState("");

  const onChangeHandle = (event) => {
    setsetInput(event.target.value);
  };
  let validQuery = false;
  if (input.length > 2) {
    validQuery = true;
  }

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
          onChange={onChangeHandle}
        />

        <button
          disabled={!validQuery}
          className={`${
            validQuery
              ? classes.filter_form_button
              : classes.filter_form_button_disabled
          }`}
        >
          "Get me My Beers!"
        </button>
      </form>
    </>
  );
};

export default BeerFilter;
