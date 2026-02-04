import "./Header.css";
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/weather-ios-logo-png-transparent.png"/>
            </div>
            <div className="separator"></div> 
            <div className="heading">
                <h1>All India Weather App</h1>
            </div>
            
        </div>
    )
}

export default Header;