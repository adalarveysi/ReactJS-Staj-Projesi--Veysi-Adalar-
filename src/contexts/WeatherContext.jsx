import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [province, setProvince] = useState("");
  const [cityData, setCityData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const weatherApiKey = "3c51365be7eb20008741670d6c154e91";
  const cityImagesApiKey = "5bjmx5LZfibTLajWYrKUDkjfrnk3hdWQC8ayAsBVlNo";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hava durumu API'sinden veri alınır
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=${weatherApiKey}`
        );
        // Şehir API'sinden veri alınır
        const { data } = await axios(
          `https://api.unsplash.com/search/photos?query=${province}&page=1&per_page=6 &client_id=${cityImagesApiKey}`
        );
        // Veriler context içine atanır
        setWeatherData(response.data);
        setCityData(data.results)
      } catch (error) {
        console.log(error);
      }
    };

    // Şehir değiştiğinde veri alınır
    if (province) {
      fetchData();
    }
  }, [province]);

  const sharingValues = {
    province,
    setProvince,
    weatherData,
    setWeatherData,
    cityData,
    setCityData,
  };
  return (
    <WeatherContext.Provider value={sharingValues}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
