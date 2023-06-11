import React, { useEffect, useContext } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import WeatherContext from '../../context/Weather.context';
import { UseAsyncInformation } from '../../hooks/useAsyncInfo.hook';
import { MainCard } from '../../components/MainCard/MainCard';
import { ForecastCard } from '../../components/ForecastCard/ForecastCard';
import { AsideContent } from '../../components/AsideContent/AsideContent';
import { LandingGrid, LoadingWrapper, LoadingIcon } from './Landing.styled';

function Landing() {
  const { getWeatherData } = UseAsyncInformation();
  const { data, loading } = useContext(WeatherContext);

  useEffect(() => {
    getWeatherData();
  }, []);

  if (loading || data === null) {
    return (
      <LoadingWrapper data-testid="loadingId">
        <LoadingIcon>
          <AiOutlineLoading size="80px" />
        </LoadingIcon>
      </LoadingWrapper>
    );
  }

  return (
    <LandingGrid>
      <MainCard />
      <AsideContent />
      <ForecastCard />
    </LandingGrid>
  );
}

export default Landing;
