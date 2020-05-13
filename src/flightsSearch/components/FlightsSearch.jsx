import React from "react";
import SearchBar from "./SearchBar.jsx";
import FlightsNav from "./FlightsNav.jsx";
import FlightsList from "./FlightsList.jsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as flightsActions from "../flights.actions.js";
import Loader from 'react-loader-spinner'
import {
  isDepartureSelector,
  searchValueSelector,
  isLoadingSelector
} from "../flights.selectors.js";

const FlightsSearch = ({
  setSearchValue,
  toggleDeparture,
  isDeparture,
  searchText,
  isLoading
}) => (
  <main className="flights-search">
    <h1 className="flights-search__title">Search today's flights</h1>
    <SearchBar setSearchValue={setSearchValue} isDeparture={isDeparture} />
    {isLoading && <Loader className="loader"
         type="TailSpin"
         color="#00BFFF"
         height={120}
         width={120} 
      />} 
    <FlightsNav
      toggleDeparture={toggleDeparture}
      isDeparture={isDeparture}
      setSearchValue={setSearchValue}
      searchText={searchText}
    />
    <FlightsList />
  </main>
);

const mapState = (state) => {
  return {
    isDeparture: isDepartureSelector(state),
    searchText: searchValueSelector(state),
    isLoading: isLoadingSelector(state)
  };
};

const mapDisp = {
  setSearchValue: flightsActions.setSearchValue,
  toggleDeparture: flightsActions.toggleDeparture,
};

export default connect(mapState, mapDisp)(FlightsSearch);

FlightsSearch.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  toggleDeparture: PropTypes.func.isRequired,
  isDeparture: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};
