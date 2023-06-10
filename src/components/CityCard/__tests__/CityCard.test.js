import React from 'react';
import { render } from '@testing-library/react';
import WeatherContext from '../../../context/Weather.context';
import { CityCard } from '../CityCard';

const mockContext = {
  favouriteList: [
    { name: 'London', country: 'UK' },
    { name: 'Madrid', country: 'ES' },
  ],
};
const mockProps = {
  name: 'Madrid',
  country: 'ES',
  handleOnClick: jest.fn(),
  handleFavourite: jest.fn(),
};

describe('CityCard test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component correctly', () => {
    const { getByTestId, getByText } = render(
      <WeatherContext.Provider value={mockContext}>
        <CityCard {...mockProps} />
      </WeatherContext.Provider>
    );

    expect(getByTestId('cardId')).toBeInTheDocument();
    expect(getByText(mockProps.name)).toBeInTheDocument();
  });
});
