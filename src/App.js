import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BrowseBeer from "./pages/BrowseBeers";
import FavoriteBeers from "./pages/FavoriteBeers";
import React from "react";

function App() {
  return (
    <>
      <div id="beer-description-backdrop"></div>
      <div id="beer-description-content"></div>
      <Header />

      <Route path="/" exact>
        <Redirect to="/browse-beers"></Redirect>
      </Route>
      <Route path="/browse-beers">
        <BrowseBeer />
      </Route>
      <Route path="/favorite-beers">
        <FavoriteBeers />
      </Route>
    </>
  );
}

export default App;
