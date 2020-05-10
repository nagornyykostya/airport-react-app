import React, { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import FlightsList from "./FlightsList.jsx";
import useQuery from "../useQuery.js";

const FlightsScreen = ({ toggleDeparture, setSearchValue, searchText }) => {
  let query = useQuery();
  const isSelected = query.get("type") === "departures";

  useEffect(() => {
    if (query.get("searchString") !== null) {
      setSearchValue(query.get("searchString"));
    }
    toggleDeparture(isSelected);
  }, [isSelected]);

  return (
    <>
      <nav className="flights-nav">
        <Link
          className={`flights-nav__btn ${
            isSelected && "flights-nav__btn_selected"
          }`}
          to={`/departures?type=departures&searchString=${searchText}`}
        >
          Departures
        </Link>
        <Link
          className={`flights-nav__btn ${
            !isSelected && "flights-nav__btn_selected"
          }`}
          to={`/arrivals?type=arrivals&searchString=${searchText}`}
        >
          Arrivals
        </Link>
      </nav>
      <Switch>
        <Route path={`/departures`}>
          <FlightsList />
        </Route>
        <Route path={`/arrivals`}>
          <FlightsList />
        </Route>
      </Switch>
    </>
  );
};

export default FlightsScreen;
