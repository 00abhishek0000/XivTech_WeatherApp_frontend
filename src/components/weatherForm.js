import axios from 'axios';
import '../App.css'

function WeatherForm({ onWeatherData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cities = e.target.elements.cities.value.split(',').map(city => city.trim());

    try {
      const response = await axios.post('https://backend-qph3.onrender.com/getWeather/getW', { cities });
      onWeatherData(response.data.weather);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="form" type="text" name="cities" placeholder="Enter cities (comma-separated)" />
      <button className="btn" type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
