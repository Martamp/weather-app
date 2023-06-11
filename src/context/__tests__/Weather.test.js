import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WeatherProvider, useWeatherProvider } from '../Weather.context';

const MockComponent = () => {
  const { data, error, loading, setData, currentLocation, locationsList, inputText, forecastData, showInput, favouriteList } = useWeatherProvider();

  return (
    <div>
      <div data-testid="data">{data}</div>
      <div data-testid="error">{error.toString()}</div>
      <div data-testid="loading">{loading.toString()}</div>
      <div data-testid="currentLocation">{currentLocation}</div>
      <div data-testid="locationsList">{locationsList}</div>
      <div data-testid="inputText">{inputText}</div>
      <div data-testid="forecastData">{forecastData}</div>
      <div data-testid="showInput">{showInput.toString()}</div>
      <div data-testid="favouriteList">{favouriteList.toString()}</div>
      <button onClick={() => setData('Test Data')}>Set Data</button>
    </div>
  );
};

describe('WeatherContext test', () => {
  test('should provide data and functions through the context', () => {
    const { getByTestId, getByText } = render(
      <WeatherProvider>
        <MockComponent />
      </WeatherProvider>
    );

    expect(getByTestId('data')).toBeInTheDocument();
    expect(getByTestId('error')).toBeInTheDocument();
    expect(getByTestId('loading')).toBeInTheDocument();
    expect(getByTestId('currentLocation')).toBeInTheDocument();
    expect(getByTestId('locationsList')).toBeInTheDocument();
    expect(getByTestId('inputText')).toBeInTheDocument();
    expect(getByTestId('forecastData')).toBeInTheDocument();
    expect(getByTestId('showInput')).toBeInTheDocument();
    expect(getByTestId('favouriteList')).toBeInTheDocument();

    const setDataButton = getByText('Set Data');

    fireEvent.click(setDataButton);
    expect(getByTestId('data')).toHaveTextContent('Test Data');
  });
});
