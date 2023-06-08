import styled from 'styled-components';

export const MainCardWeather = styled.section`
  grid-row: 1;
  grid-column: 1 / span 2;
  padding: 20px;
  padding: 1rem;
  max-width: 50vw;
  align-self: center;
`;
export const CurrentWeatherWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
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
