import React, { useRef } from "react";
import { useWeather } from "../contexts/WeatherContext";
import "../App.css";
import defaultImg from "../image/perfect-day.svg";
const Province = () => {
  const { province, setProvince, weatherData } = useWeather();
  const inputRef = useRef(null); // Ref oluştur

  function handleSubmit(e) {
    e.preventDefault();
    const newProvince = inputRef.current.value; // Ref'i kullanarak input değerini al
    setProvince(newProvince);
  }
  console.log(weatherData);
  return (
    <>
      <div className="main-container">
      <div className="container">
        <div className="weather__title">
          <h1>Weather App</h1>
        </div>
        <div className="weather__header">
          <form className="weather__search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city..."
              className="weather__searchform"
              ref={inputRef}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="weather__body">
          <h1 className="weather__city">
            {weatherData ? weatherData.name : "City"}
          </h1>
          <div className="weather__datetime">
            {/* Add date and time display here */}
          </div>
          <div className="weather__icon">
            {weatherData && (
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            )}
          </div>
          <p className="weather__temperature">
            {weatherData ? Math.round(weatherData.main.temp - 273.15) : "-"}°C
          </p>
          <div className="weather__minmax">
            <p>
              Min:{" "}
              {weatherData
                ? Math.round(weatherData.main.temp_min - 273.15)
                : "-"}
              °
            </p>
            <p>
              Max:{" "}
              {weatherData
                ? Math.round(weatherData.main.temp_max - 273.15)
                : "-"}
              °
            </p>
          </div>
        </div>
        <div className="weather__info">
          <div className="weather__card">
            <i className="fa-solid fa-temperature-full" />
            <div>
              <p>Real Feel</p>
              <p className="weather__realfeel">
                {weatherData ? Math.round(weatherData.main.feels_like) : "-"}
              </p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-droplet" />
            <div>
              <p>Humidity</p>
              <p className="weather__humidity">
                {weatherData ? weatherData.main.humidity : "-"}
              </p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-wind" />
            <div>
              <p>Wind</p>
              <p className="weather__wind">
                {weatherData ? weatherData.wind.speed : "-"}
              </p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-gauge-high" />
            <div>
              <p>Pressure</p>
              <p className="weather__pressure">
                {weatherData ? weatherData.main.pressure : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default Province;
