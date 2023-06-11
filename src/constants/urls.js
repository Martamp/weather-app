import { WEATHER_API_KEY } from './keys';

export const WEATHER_URL = (currentLocation) => `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&units=metric&appid=${WEATHER_API_KEY} `;
export const FORECAST_URL = (currentLocation) => `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&appid=${WEATHER_API_KEY}`;
export const LOCATION_URL = (inputText) => `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputText}`;
