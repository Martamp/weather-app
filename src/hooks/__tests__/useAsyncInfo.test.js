import React from 'react';
import { renderHook } from '@testing-library/react';
import { UseAsyncInformation } from '../useAsyncInfo.hook';

describe('UseAsyncInformation test', () => {
  test('should return getWeatherData and getLocation functions', () => {
    const mockWeatherContext = {
      setData: jest.fn(),
      setError: jest.fn(),
      setLoading: jest.fn(),
      setLocations: jest.fn(),
      setForecastData: jest.fn(),
      inputText: '',
      currentLocation: { latitude: 43.2229, longitude: -10.3456 },
    };

    jest.mock('../useLocation.hook', () => ({
      useLocation: jest.fn().mockReturnValue({
        latitude: 37.7749,
        longitude: -32.4954,
      }),
    }));

    jest.spyOn(React, 'useContext').mockReturnValue(mockWeatherContext);

    const { result } = renderHook(() => UseAsyncInformation());

    expect(result.current.getWeatherData).toBeDefined();
    expect(result.current.getLocation).toBeDefined();
  });
});
