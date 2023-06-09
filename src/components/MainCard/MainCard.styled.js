import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../constants/mediaQuery';

export const MainCardWeather = styled.section`
  grid-area: left;
  padding: 20px;
  padding: 1rem;
  max-width: 50vw;
  align-self: center;

  ${MEDIA_QUERIES.onlyMobile} {
    max-width: 100vw;
  }
`;
export const CurrentWeatherWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;

  ${MEDIA_QUERIES.onlyMobile} {
    flex-direction: column-reverse;
  }
`;

export const TemperatureText = styled.h1`
  font-weight: var(--light-size);
  font-size: 4.5rem;
  margin: 0;
`;

export const CityText = styled.h2`
  font-size: 2.5rem;
`;

export const CityTextCaption = styled.h3`
  font-size: 2rem;
  color: var(--tertiary-color);
`;

export const CityTextWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  ${MEDIA_QUERIES.onlyMobile} {
    flex-direction: column;
    padding-bottom: 0.8rem;
  }
`;

export const DateCaption = styled.span``;
export const WeatherData = styled.div`
  display: flex;
  gap: 0.5rem;

  p:nth-child(2) {
    color: var(--tertiary-color);
  }
  p:last-child {
    color: var(--secondary-color);
  }
`;

export const LocationIcon = styled.img`
  width: 150px;
`;
