import React, { useState } from "react";

const SearchBar = ({ searchFlights }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    searchFlights(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Airline, destination or flight #"
      />
      <button className="search-bar__btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
