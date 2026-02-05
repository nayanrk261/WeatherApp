const About = () => {
    return(
        <div style={{ 
            padding: '40px 20px',
            maxWidth: '800px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '20px',
            marginTop: '40px'
        }}>
            <h1>About this App</h1>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginTop: '20px' }}>
                Our Weather App is a sleek, user-friendly tool designed to provide accurate,
                real-time weather updates at your fingertips. With an intuitive interface, 
                it delivers current conditions, hourly forecasts, and extended outlooks tailored 
                to your location.
            </p>
            <h2 style={{ marginTop: '30px' }}>Features:</h2>
            <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Real-time weather data</li>
                <li>Temperature in Celsius</li>
                <li>Humidity and wind speed</li>
                <li>Beautiful, responsive design</li>
            </ul>
        </div>
    )
}

export default About;  // ← ADD THIS!