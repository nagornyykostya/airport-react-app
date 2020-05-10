import React, { useEffect } from "react";
import FlightRow from "./FlightRow.jsx";
import { connect } from "react-redux";
import * as flightsActions from "../flights.actions.js";
import { isDepartureSelector, searchFlights, searchValueSelector } from "../flights.selectors.js";
var moment = require("moment");

const FlightsList = ({ flights, searchText, fetchFlights }) => {

  useEffect(() => {
    console.log('fetching')
    const todayDate = moment().format("llll");
    fetchFlights(todayDate);
  }, [searchText]);
  
  
  if (!flights || flights.length === 0) {
    return (
      <div className="flights-screen">
        <div className="flights-table__no-flights">No flights for this search request</div>
      </div>
    );
  }

  return (
    <div className="flights-screen">
      <table className="flights-table">
        <thead>
          <tr className="flights-table__head">
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <tbody className="flights-table__body">
          {flights.map((flight) => (
            <FlightRow key={flight.id} {...flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    flights: searchFlights(state),
    isDeparture: isDepartureSelector(state),
    searchText: searchValueSelector(state)

  };
};

const mapDisp = {
  fetchFlights: flightsActions.fetchFlights,
  setSearchValue: flightsActions.setSearchValue,
  toggleDeparture: flightsActions.toggleDeparture
};

export default connect(mapState, mapDisp)(FlightsList);
