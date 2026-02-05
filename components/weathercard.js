import "./weatherCard.css";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>📍 {data.name}</h2>
      
      <div className="temperature">
        {Math.round(data.main.temp)}°C
      </div>
      
      <p className="weather-description">
        {data.weather[0].description}
      </p>
      
      <div className="weather-info">
        <div className="info-item">
          <div className="info-label">Feels Like</div>
          <div className="info-value">{Math.round(data.main.feels_like)}°C</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Humidity</div>
          <div className="info-value">{data.main.humidity}%</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Wind Speed</div>
          <div className="info-value">{data.wind.speed} m/s</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Pressure</div>
          <div className="info-value">{data.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;