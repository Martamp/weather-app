import React, { useEffect, useContext } from 'react';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import { MainCardWeather, TemperatureText, CityText, DateCaption, WeatherData, LocationIcon, CityTextWrapper, CityTextCaption, CurrentWeatherWrapper } from './MainCard.styled';
import SunIcon from '../../assets/sun.svg';

export const MainCard = () => {
  return (
    <MainCardWeather>
      <CurrentWeatherWrapper>
        <div>
          <TemperatureText>18</TemperatureText>
          <CityTextWrapper>
            <CityText>Madrid</CityText>
            <CityTextCaption>Pais</CityTextCaption>
          </CityTextWrapper>
          <p>Hoy</p>
          <WeatherData>
            <p>min 20</p>
            <p>max 20</p>
            <p>humedad</p>
          </WeatherData>
        </div>
        <LocationIcon src={SunIcon} alt="Soleado" />
      </CurrentWeatherWrapper>
      <div>tarjetas con otros dias</div>
    </MainCardWeather>
  );
};
