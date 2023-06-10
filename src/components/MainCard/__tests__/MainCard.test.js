import React from 'react';
import { render } from '@testing-library/react';
import WeatherContext from '../../../context/Weather.context';
import { MainCard } from '../MainCard';

const mockContext = {
  data: { name: 'Brussels', main: { temp: '30' }, dt_txt: '2023-06-11 09:00:00', weather: [{ main: 'rain' }], sys: { country: 'BG' } },
};

describe('MainCard test', () => {
  it('renders the component correctly', () => {
    const { getByTestId } = render(
      <WeatherContext.Provider value={mockContext}>
        <MainCard />
      </WeatherContext.Provider>
    );

    expect(getByTestId('mainDataId')).toBeInTheDocument();
    expect(getByTestId('nameId')).toHaveTextContent(mockContext.data.name);
    expect(getByTestId('countryId')).toBeInTheDocument();
    expect(getByTestId('maxMinDataId')).toBeInTheDocument();
  });
});
