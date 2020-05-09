import React from "react";
import { Route, Switch, Link, useLocation, useParams } from "react-router-dom";
import FlightsList from "./FlightsList.jsx";

const FlightsScreen = ({ toggleDeparture, isDeparture, flights, searchText }) => {


  return (
    <>
      <nav className="flights-nav">
        <Link
          className={`flights-nav__btn ${
            isDeparture && "flights-nav__btn_selected"
          }`}
          to={`/departures`}
          onClick={() => toggleDeparture(true)}
        >
          Departures
        </Link>
        <Link
          className={`flights-nav__btn ${
            !isDeparture && "flights-nav__btn_selected"
          }`}
          to={`/arrivals`}
          onClick={() => toggleDeparture(false)}
        >
          Arrivals
        </Link>
      </nav>
      <Switch>
        <Route path={`/departures`}>
          <FlightsList flights={flights} />
        </Route>
        <Route path={`/arrivals`}>
          <FlightsList flights={flights} />
        </Route>
      </Switch>
    </>
  );
};

export default FlightsScreen;
