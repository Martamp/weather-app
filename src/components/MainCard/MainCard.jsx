import React, { useEffect, useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import { MainCardWeather, TemperatureText, CityText, DateCaption, WeatherData, LocationIcon, CityTextWrapper, CityTextCaption, CurrentWeatherWrapper } from './MainCard.styled';
import SunIcon from '../../assets/sun.svg';
import { weatherIcon, countryName } from '../../utils/Weather.utils';

export const MainCard = () => {
  const { data, loading } = useContext(WeatherContext);
  if (loading || data === null) {
    return 'loading';
  }

  const { main, name, weather, sys } = data;

  const WeatherIcon = weatherIcon(weather[0].main);
  return (
    <MainCardWeather>
      <CurrentWeatherWrapper>
        <div>
          <TemperatureText>{main.temp}°</TemperatureText>
          <CityTextWrapper>
            <CityText>{name}</CityText>
            <CityTextCaption>{countryName(sys.country)}</CityTextCaption>
          </CityTextWrapper>
          <p>Today</p>
          <WeatherData>
            <p>{main.temp_min}°</p>
            <p>{main.temp_max}°</p>
            <p>Humidity: {main.humidity}</p>
          </WeatherData>
        </div>
        <WeatherIcon size="90px" />
      </CurrentWeatherWrapper>
    </MainCardWeather>
  );
};
