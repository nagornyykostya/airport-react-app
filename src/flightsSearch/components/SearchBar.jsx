import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ setSearchValue, isDeparture }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  const urlParam = isDeparture ? "departures" : "arrivals";

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Airline, destination or flight #"
      />
      <Link
        className="search-bar__btn"
        onClick={handleSearch}
        to={`/${urlParam}?type=${urlParam}&searchString=${inputValue}`}
      >
        Search
      </Link>
    </div>
  );
};

export default SearchBar;
