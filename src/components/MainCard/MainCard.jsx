import React, { useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import { weatherIcon, countryName } from '../../utils/Weather.utils';
import { MainCardWeather, TemperatureText, CityText, WeatherData, CityTextWrapper, CityTextCaption, CurrentWeatherWrapper } from './MainCard.styled';

export const MainCard = () => {
  const { data } = useContext(WeatherContext);

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
