import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    navigate(`/weather/${city.trim()}`);
  };

  const handleClear = () => {
    setCity("");
    setError("");
  };

  return (
    <div className="search-wrapper">
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          handleCheck();
        }}
      >
        <div className="searchbox">
          <input
            type="text"
            placeholder="Enter city name (e.g., Mumbai, Delhi, Pune)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        
        <div className="button-group">
          <button type="submit">🔍 Search Weather</button>
          
          {city && (
            <button type="button" className="clear-button" onClick={handleClear}>
              ✖ Clear
            </button>
          )}
        </div>
      </form>

      {error && (
        <div className="status-message error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default Search;