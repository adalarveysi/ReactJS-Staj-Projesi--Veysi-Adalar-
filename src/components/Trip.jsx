import React from "react";
import { useWeather } from "../contexts/WeatherContext";
import "../App.css";
const Trip = () => {
  const { cityData } = useWeather();
  console.log(cityData);
  return (
    <>

      <h1 className="city-info">Şehir Hakkında Fotoğraflar</h1>
      <div className="trip-container">
        {cityData.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="images"
          />
        ))}
      </div>
    </>
  );
};

export default Trip;
