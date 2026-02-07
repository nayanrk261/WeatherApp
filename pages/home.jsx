import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-icon">🌦️</div>
        
        <h1 className="home-title">
          Welcome to Weather App
        </h1>
        
        <p className="home-description">
          Get real-time weather updates for any city in India. 
          Check current conditions, temperature, humidity, and more 
          with our simple and elegant weather application.
        </p>
        
        <Link to="/weatherpage" className="home-cta">
          🔍 Check Weather
        </Link>

        <div className="home-features">
          <div className="feature-card">
            <div className="feature-icon">🌡️</div>
            <div className="feature-title">Real-time Data</div>
            <div className="feature-text">
              Live weather information updated instantly
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <div className="feature-title">Any Location</div>
            <div className="feature-text">
              Search weather for any city across India
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Fast & Simple</div>
            <div className="feature-text">
              Clean interface with instant results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;