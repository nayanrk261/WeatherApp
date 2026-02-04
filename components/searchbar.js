import { useState } from "react";
import WeatherCard from "./weathercard";
import "./Search.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);      // ← NEW: Store weather data
  const [loading, setLoading] = useState(false);      // ← NEW: Track loading state
  const [error, setError] = useState("");             // ← NEW: Store error messages

  
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const handleCheck = () => {
    if (!city.trim()) {
      setError("Please enter a city name");           // ← Use error state
      return;
    }

    // Clear previous data
    setError("");
    setWeather(null);
    setLoading(true);                                 // ← Start loading

    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);                            // ← Stop loading
        
        // Check if city was found
        if (data.cod === "404") {
          setError("City not found! Try another city.");
          return;
        }
        
        setWeather(data);                             // ← Store weather data
        console.log("Weather Data:", data);
      })
      .catch(error => {
        setLoading(false);                            // ← Stop loading
        setError("Failed to fetch weather data!");
        console.error("Error:", error);
      });
  };

  const handleClear = () => {
    setCity("");         // Clear input
    setWeather(null);    // Clear weather data
    setError("");        // Clear errors
    setLoading(false);   // Clear loading state
  };


  return (
    <div>
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
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Check!</button>
      </form>

      {/* Button doesn't exist in DOM at all if condition is false*/}
      {(city || weather || error) && (
      <button type="button" onClick={handleClear}>Clear</button>
      )}

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* -Weather data - we'll create WeatherCard next */}
      {/* --Weather card component */}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default Search;