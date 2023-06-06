import styled from 'styled-components';

export const MainCardWeather = styled.section`
  padding: 1rem;
  max-width: 50vw;
`;
export const CurrentWeatherWrapper = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
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
  grid-row: 1;
  grid-column: 1 / span 2;
  padding: 20px;

  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;

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
