import { useContext } from 'react';
import WeatherContext from '../context/Weather.context.jsx';

export const UseAsyncInformation = () => {
  const { setData, setError, setLoading } = useContext(WeatherContext);
  const WEATHER_API_KEY = 'ccdffdcbaa8e75e4455c1602c0a7c652';
  const LOCATION_KEY = '7a90604a23mshd28bc342c809f3dp1a2186jsn30bb3a6a4335';
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&units=metric&appid=${WEATHER_API_KEY} `;
  const LOCATION_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
  const locationOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7a90604a23mshd28bc342c809f3dp1a2186jsn30bb3a6a4335',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  const getWeatherData = async () => {
    await fetch(WEATHER_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.parse(data), data);
        setData(data);
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        setError(err);
        console.log('Ha habido un error: ', err);
      });
  };

  const getLocation = async () => {
    await fetch(LOCATION_URL, locationOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.parse(data), data);
        setData(data);
        setLoading(false);
      })
      .catch((err: any) => {
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
