import React, { useState } from 'react';
import './App.css';
import WeatherForm from './components/weatherForm.js';
import WeatherDisplay from './components/Display.js';

function App() {
  const [weatherData, setWeatherData] = useState({});

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm onWeatherData={handleWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
