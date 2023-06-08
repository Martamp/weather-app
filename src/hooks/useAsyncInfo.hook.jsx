import { useContext, useEffect } from 'react';
import WeatherContext from '../context/Weather.context';
import useLocation from './useLocation.hook';

export const UseAsyncInformation = () => {
  const { setData, setError, setLoading, setLocations, setForecastData, inputText } = useContext(WeatherContext);
  const currentLocation = useLocation();

  const WEATHER_API_KEY = 'ccdffdcbaa8e75e4455c1602c0a7c652';
  const LOCATION_KEY = '7a90604a23mshd28bc342c809f3dp1a2186jsn30bb3a6a4335';
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&units=metric&appid=${WEATHER_API_KEY} `;
  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&appid=${WEATHER_API_KEY}`;
  const LOCATION_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputText}`;
  const locationOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': LOCATION_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  useEffect(() => {
    getWeatherData();
    getForecastData();
  }, [currentLocation]);

  const getWeatherData = async () => {
    currentLocation &&
      (await fetch(WEATHER_URL)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log('Ha habido un error: ', err);
        }));
  };

  const getForecastData = async () => {
    currentLocation &&
      (await fetch(FORECAST_URL)
        .then((response) => response.json())
        .then((data) => {
          setForecastData(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log('Ha habido un error: ', err);
        }));
  };

  const getLocation = async () => {
    await fetch(LOCATION_URL, locationOptions)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log('Ha habido un error: ', err);
      });
  };

  return {
    getWeatherData,
    getLocation,
  };
};
