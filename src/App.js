import React, { useState } from 'react';
import './App.css';
import WeatherForm from './components/weatherForm.js';
import WeatherDisplay from './components/Display.js';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const [weatherData, setWeatherData] = useState({});

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };
  const {isAuthenticated } = useAuth0();

  return (
    <>
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      {isAuthenticated &&
        <><h1>Weather App</h1><WeatherForm onWeatherData={handleWeatherData} /><WeatherDisplay weatherData={weatherData} /></>
      }
    </div>
    </>
  );
}

export default App;
