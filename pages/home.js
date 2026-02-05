const Home = () => {
    return(
        <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
                🌦️ Welcome to Weather App
            </h1>
            <p style={{ 
                fontSize: '18px', 
                color: '#666', 
                marginBottom: '40px',
                lineHeight: '1.6'
            }}>
                Our Weather App is a sleek, user-friendly tool designed to provide accurate,
                real-time weather updates at your fingertips. Whether planning your day, a trip, 
                or simply staying informed, get the latest weather information instantly!
            </p>
            
            {/* This button will work once we add routing */}
            <button 
                type="button"
                style={{
                    padding: '15px 40px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}
            >
                🔍 Check Weather
            </button>
        </div>
    )
}

export default Home;