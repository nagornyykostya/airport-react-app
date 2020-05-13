import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useQuery from "../useQuery.js";
import PropTypes from "prop-types";
var classNames = require("classnames");

const FlightsNav = ({ toggleDeparture, setSearchValue, searchText }) => {
  let query = useQuery();
  const isSelected = query.get("type") === "departures";

  useEffect(() => {
    if (query.get("searchString") !== null) {
      setSearchValue(query.get("searchString"));
    }
    toggleDeparture(isSelected);
  }, [isSelected]);

  const selectedDepartureBtn = classNames({
    "flights-nav__btn_selected": isSelected,
  });
  const selectedArrivalBtn = classNames({
    "flights-nav__btn_selected": !isSelected,
  });

  return (
    <nav className="flights-nav">
      <Link
        className={`flights-nav__btn ${selectedDepartureBtn}`}
        to={`/departures?type=departures&searchString=${searchText}`}
      >
        Departures
      </Link>
      <Link
        className={`flights-nav__btn ${selectedArrivalBtn}`}
        to={`/arrivals?type=arrivals&searchString=${searchText}`}
      >
        Arrivals
      </Link>
    </nav>
  );
};

export default FlightsNav;

FlightsNav.propTypes = {
  setSearchValue: PropTypes.func,
  toggleDeparture: PropTypes.func,
  searchText: PropTypes.string,
};
