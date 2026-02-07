import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="logo">
                        <img 
                            src="https://cdn.freebiesupply.com/logos/large/2x/weather-ios-logo-png-transparent.png"
                            alt="Weather App Logo"
                        />
                    </div>
                    <div className="heading">
                        <h1>Weather App</h1>
                    </div>
                </div>

                <nav>
                    <Link to="/">🏠 Home</Link>
                    <Link to="/weatherpage">🔍 Search</Link>
                    <Link to="/about">ℹ️ About</Link>
                    <Link to="/favourites">⭐ Favorites</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;