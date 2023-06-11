import { useContext, useEffect } from 'react';
import WeatherContext from '../context/Weather.context';
import useLocation from './useLocation.hook';
import { WEATHER_URL, FORECAST_URL, LOCATION_URL } from '../constants/urls';
import { LOCATION_KEY } from '../constants/keys';

export const UseAsyncInformation = () => {
  const { setData, setError, setLoading, setLocations, setForecastData, inputText } = useContext(WeatherContext);
  const currentLocation = useLocation();

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
      (await fetch(WEATHER_URL(currentLocation))
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
      (await fetch(FORECAST_URL(currentLocation))
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
    await fetch(LOCATION_URL(inputText), locationOptions)
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
