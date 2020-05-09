import React, { useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import FlightsScreen from "./FlightsScreen.jsx";
import { connect } from "react-redux";
import * as flightsActions from "../flights.actions.js";
import { isDepartureSelector, searchFlights, searchTextSelector } from "../flights.selectors.js";
var moment = require("moment");

const FlightsSearch = ({ searchFlights, fetchFlights, toggleDeparture, isDeparture, flights, searchText  }) => {

  useEffect(() => {
    const todayDate = moment().format("llll");
    fetchFlights(todayDate);
  }, []);

  return (
    <main className="flights-search">
      <h1 className="flights-search__title">Search flight</h1>
      <SearchBar searchFlights={searchFlights} />
      <FlightsScreen toggleDeparture={toggleDeparture} isDeparture={isDeparture} flights={flights} searchText={searchText} />
    </main>
  );
};

const mapState = (state) => {
  return {
    flights: searchFlights(state),
    isDeparture: isDepartureSelector(state),
    searchText: searchTextSelector(state)

  };
};

const mapDisp = {
  fetchFlights: flightsActions.fetchFlights,
  searchFlights: flightsActions.searchFlights,
  toggleDeparture: flightsActions.toggleDeparture
};

export default connect(mapState, mapDisp)(FlightsSearch);
