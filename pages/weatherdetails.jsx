import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../components/weathercard";

const WeatherDetails = () => {
  const { city } = useParams();  // ← Magic! Gets city from URL
  
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "1ae19adbd2e25cdc2c49ba56ced491ea";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  // Auto-fetch weather when city changes
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      try {
        const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
          setError(`City "${city}" not found!`);
          setWeather(null);
        } else {
          setWeather(data);
        }
      } catch (err) {
        setError("Failed to fetch weather data!");
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);  // ← Re-run when city changes!

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "30px",
        textTransform: "capitalize" 
      }}>
        Weather in {city}
      </h2>

      {loading && (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Loading weather for {city}...
        </p>
      )}
      
      {error && (
        <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>
          {error}
        </p>
      )}
      
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default WeatherDetails;