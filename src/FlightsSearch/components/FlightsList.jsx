import React from "react";
import FlightRow from "./FlightRow.jsx";
import { useParams, useLocation } from "react-router";

const FlightsList = ({ flights }) => {

const {searchText} = useParams();
  console.log(searchText)
    
  if (!flights || flights.length === 0) {
    return (
      <div className="flights-screen">
        <div className="flights-table__no-flights">No flights</div>
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

export default FlightsList;
