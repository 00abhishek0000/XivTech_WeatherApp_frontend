function WeatherDisplay({ weatherData }) {
    return (
      <div>
        {Object.entries(weatherData).map(([city, temperature]) => (
          <p key={city}>{city}: {temperature}</p>
        ))}
      </div>
    );
  }
  
  export default WeatherDisplay;
  