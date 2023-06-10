import React from 'react';
import { render } from '@testing-library/react';
import WeatherContext from '../../../context/Weather.context';
import { ForecastCard } from '../ForecastCard';

const mockContext = {
  forecastData: {
    list: [
      { name: 'Paris', country: 'FR', main: { temp: '21' }, dt_txt: '2023-06-10 09:00:00', weather: [{ main: 'rain' }] },
      { name: 'Brussels', country: 'BG', main: { temp: '30' }, dt_txt: '2023-06-12 09:00:00', weather: [{ main: 'rain' }] },
      { name: 'Madrid', country: 'ES', main: { temp: '21' }, dt_txt: '2023-06-14 09:00:00', weather: [{ main: 'rain' }] },
    ],
  },
};

describe('ForecastCard test', () => {
  it('renders the component correctly', () => {
    const { getAllByTestId } = render(
      <WeatherContext.Provider value={mockContext}>
        <ForecastCard />
      </WeatherContext.Provider>
    );

    expect(getAllByTestId('forecastCardId')).toHaveLength(2);
    expect(getAllByTestId('forecastDataId')).toHaveLength(2);
    expect(getAllByTestId('forecastHourId')).toHaveLength(2);
  });

  it('if the dates are the same it should not appear in the document', () => {
    const sameDate = {
      forecastData: {
        list: [
          { name: 'Brussels', country: 'BG', main: { temp: '30' }, dt_txt: '2023-06-11 09:00:00', weather: [{ main: 'rain' }] },
          { name: 'Madrid', country: 'ES', main: { temp: '21' }, dt_txt: '2023-06-11 10:00:00', weather: [{ main: 'rain' }] },
        ],
      },
    };
    const { getByTestId } = render(
      <WeatherContext.Provider value={sameDate}>
        <ForecastCard />
      </WeatherContext.Provider>
    );

    expect(getByTestId('forecastId')).toBeEmptyDOMElement();
  });
});
