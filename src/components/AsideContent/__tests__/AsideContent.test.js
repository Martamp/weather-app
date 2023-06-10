import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WeatherContext from '../../../context/Weather.context';
import { AsideContent } from '../AsideContent';
import { UseAsyncInformation } from '../../../hooks/useAsyncInfo.hook';

const mockContext = {
  getLocation: jest.fn(),
  setInputText: jest.fn(),
  inputText: '',
  locationsList: [],
  showInput: true,
  favouriteList: [],
  onShowInput: jest.fn(),
  handleFavourite: jest.fn(),
  handleLocation: jest.fn(),
};

jest.mock('../../../hooks/useAsyncInfo.hook', () => ({
  UseAsyncInformation: jest.fn().mockReturnValue({
    getLocation: jest.fn(),
  }),
}));

describe('AsideContent test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    UseAsyncInformation.mockImplementation(() => ({ getLocation: jest.fn() }));
  });

  it('renders the component correctly', () => {
    const { getByTestId } = render(
      <WeatherContext.Provider value={mockContext}>
        <AsideContent />
      </WeatherContext.Provider>
    );

    expect(getByTestId('searchIconId')).toBeInTheDocument();
    expect(getByTestId('inputSearcherId')).toBeInTheDocument();
  });

  it('It should display the input field and handle the input change', () => {
    const { getByTestId } = render(
      <WeatherContext.Provider value={mockContext}>
        <AsideContent />
      </WeatherContext.Provider>
    );

    fireEvent.click(getByTestId('searchIconId'));

    const inputField = getByTestId('inputSearcherId');
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: 'Madrid' } });

    expect(mockContext.setInputText).toHaveBeenCalledWith('Madrid');
  });

  it('Should render favourite list when showinput is false and there are elements in the array', () => {
    const { getByTestId } = render(
      <WeatherContext.Provider value={{ ...mockContext, favouriteList: [{ city: 'Madrid' }], showInput: false }}>
        <AsideContent />
      </WeatherContext.Provider>
    );

    expect(getByTestId('favouiteCardId')).toBeInTheDocument();
  });

  it('It shuld dispay city cards when the input is shown and there are matching cities', () => {
    const filteredCities = [{ name: 'London', country: 'UK' }];

    jest.mock('../../../utils/Weather.utils', () => ({
      shouldShowCityCard: jest.fn().mockReturnValue(true),
      filteredCitiesList: jest.fn().mockReturnValue(filteredCities),
    }));

    const { getByTestId, getByText } = render(
      <WeatherContext.Provider value={{ ...mockContext, locationsList: filteredCities, showInput: true, inputText: 'London' }}>
        <AsideContent />
      </WeatherContext.Provider>
    );

    const searchIcon = getByTestId('searchIconId');
    fireEvent.click(searchIcon);

    const input = getByTestId('inputSearcherId');
    fireEvent.change(input, { target: { value: 'London' } });

    expect(getByText('London')).toBeInTheDocument();
  });
});
