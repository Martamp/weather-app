import React, { useEffect, useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import { UseAsyncInformation } from '../../hooks/useAsyncInfo.hook';
import { MainCard } from '../../components/MainCard/MainCard';
import { LandingGrid } from './Landing.styled';
import { ForecastCard } from '../../components/ForecastCard/ForecastCard';

function App() {
  const { getWeatherData, getLocation } = UseAsyncInformation();
  const { data } = useContext(WeatherContext);

  useEffect(() => {
    //   getWeatherData();
    //  getLocation();
  }, []);

  return (
    <LandingGrid>
      <MainCard />
      <MainCard />
      <ForecastCard />
    </LandingGrid>
  );
}

export default App;
