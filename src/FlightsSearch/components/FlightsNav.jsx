import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useQuery from "../useQuery.js";
import PropTypes from "prop-types";

const FlightsNav = ({ toggleDeparture, setSearchValue, searchText }) => {
  let query = useQuery();
  const isSelected = query.get("type") === "departures";

  useEffect(() => {
    if (query.get("searchString") !== null) {
      setSearchValue(query.get("searchString"));
    }
    toggleDeparture(isSelected);
  }, [isSelected]);

  return (
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
  );
};

export default FlightsNav;

FlightsNav.PropTypes = {
  setSearchValue: PropTypes.func,
  toggleDeparture: PropTypes.func,
  searchText: PropTypes.string,
};
