import React from "react";
import SearchBar from "./SearchBar.jsx";
import FlightsScreen from "./FlightsScreen.jsx";
import { connect } from "react-redux";
import * as flightsActions from "../flights.actions.js";
import { isDepartureSelector, searchValueSelector } from "../flights.selectors.js";

const FlightsSearch = ({ setSearchValue, toggleDeparture, isDeparture, searchText  }) => {

  return (
    <main className="flights-search">
      <h1 className="flights-search__title">Search flight</h1>
      <SearchBar setSearchValue={setSearchValue} isDeparture={isDeparture}/>
      <FlightsScreen toggleDeparture={toggleDeparture} isDeparture={isDeparture} setSearchValue={setSearchValue} searchText={searchText}/>
    </main>
  );
};

const mapState = (state) => {
  return {
    isDeparture: isDepartureSelector(state),
    searchText: searchValueSelector(state)

  };
};

const mapDisp = {
  setSearchValue: flightsActions.setSearchValue,
  toggleDeparture: flightsActions.toggleDeparture
};

export default connect(mapState, mapDisp)(FlightsSearch);
