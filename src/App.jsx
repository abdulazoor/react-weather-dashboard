import { useEffect, useState } from "react";
import citiesData from "./data/cities.json";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "6627502f93c7bf654f425866f15a40e8"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const requests = citiesData.List.map(city =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${city.CityCode}&units=metric&appid=${API_KEY}`
          ).then(res => {
            if (!res.ok) {
              throw new Error("API Error");
            }
            return res.json();
          })
        );

        const results = await Promise.all(requests);

        setWeatherData(results);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load weather data.");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Weather Dashboard</h1>

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className="grid">
          {weatherData.map(city => (
            <WeatherCard key={city.id} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;