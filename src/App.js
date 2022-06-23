import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BrowseBeer from "./pages/BrowseBeers";
import FavoriteBeers from "./pages/FavoriteBeers";
import Modal from "./components/UI/Modal";
import React from "react";

function App() {
  return (
    <>
      <Modal />
      <Header />
      <Route path="/" exact>
        <BrowseBeer />
      </Route>
      <Route path="/browse-beers" exact>
        <BrowseBeer />
      </Route>
      <Route path="/favorite-beers">
        <FavoriteBeers />
      </Route>
    </>
  );
}

export default App;
