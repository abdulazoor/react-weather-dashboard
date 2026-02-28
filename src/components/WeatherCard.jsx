function WeatherCard({ city }) {
  return (
    <div className="card">
      <h2>{city.name}</h2>
      <p className="country">{city.sys.country}</p>

      <img
        src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <p className="temp">{city.main.temp} °C</p>
      <p>{city.weather[0].description}</p>

      <div className="details">
        <p>Min: {city.main.temp_min} °C</p>
        <p>Max: {city.main.temp_max} °C</p>
        <p>Humidity: {city.main.humidity}%</p>
        <p>Pressure: {city.main.pressure} hPa</p>
      </div>

      <div className="highlighted">
        <p>Longitude: {city.coord.lon}</p>
        <p>Latitude: {city.coord.lat}</p>
        <p>
          Last Updated:{" "}
          {new Date(city.dt * 1000).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;