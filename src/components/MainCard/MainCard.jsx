import React, { useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import { weatherIcon, countryName } from '../../utils/Weather.utils';
import { MainCardWeather, TemperatureText, CityText, WeatherData, CityTextWrapper, CityTextCaption, CurrentWeatherWrapper } from './MainCard.styled';

export const MainCard = () => {
  const { data } = useContext(WeatherContext);

  const { main, name, weather, sys } = data;

  const WeatherIcon = weatherIcon(weather[0].main);
  return (
    <MainCardWeather data-testid="mainDataId">
      <CurrentWeatherWrapper>
        <div>
          <TemperatureText aria-label="Current temperature">{main.temp}°</TemperatureText>
          <CityTextWrapper>
            <CityText data-testid="nameId">{name}</CityText>
            <CityTextCaption data-testid="countryId">{countryName(sys.country)}</CityTextCaption>
          </CityTextWrapper>
          <p>Today</p>
          <WeatherData data-testid="maxMinDataId">
            <p aria-label="Minimum temperature">{main.temp_min}°</p>
            <p aria-label="Maximum temperature">{main.temp_max}°</p>
            <p>Humidity: {main.humidity}</p>
          </WeatherData>
        </div>
        <WeatherIcon size="90px" alt={`${weather[0].main} icon`} />
      </CurrentWeatherWrapper>
    </MainCardWeather>
  );
};
